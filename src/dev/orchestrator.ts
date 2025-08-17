/**
 * Native Federation Orchestrator
 *
 * This module serves as the central orchestrator for micro frontends using vanilla-native-federation.
 * It handles the initialization, configuration, and bootstrapping of remote micro frontend applications.
 */

import "es-module-shims";

import { initFederation, LoadRemoteModule } from "vanilla-native-federation";
import {
  consoleLogger,
  sessionStorageEntry,
  useShimImportMap,
} from "vanilla-native-federation/options";
import { BootstrapModule, EnvironmentConfig } from "./utils/contracts";
import {
  fetchPiralEnvVariables,
  withConfigFilter,
  withTag,
} from "./utils/piral";

const STORAGE_KEY = "__NATIVE_FEDERATION__.settings";

/**
 * API endpoints for Piral integration
 */
const PIRAL_ENDPOINTS = {
  META: "/api/v1/meta",
  NATIVE_FEDERATION: "/api/v1/native-federation",
} as const;

/**
 * Creates a bootstrapper function that loads and initializes micro frontends.
 *
 * @param loadRemoteModule - Function to load remote modules from federation
 * @param env - Environment configuration for each micro frontend
 * @returns A bootstrapper function that can load and bootstrap remote modules
 */
function createBootstrapper(
  loadRemoteModule: LoadRemoteModule<BootstrapModule>,
  env: Record<string, EnvironmentConfig>
): LoadRemoteModule {
  return async (
    remoteName: string,
    exposedModule: string
  ): Promise<unknown> => {
    try {
      const module = await loadRemoteModule(remoteName, exposedModule);
      return module.bootstrap(loadRemoteModule, env[remoteName] ?? {});
    } catch (error) {
      console.error(`Failed to bootstrap remote module ${remoteName}:`, error);
      throw error;
    }
  };
}

/**
 * Retrieves cached environment configuration from storage.
 * Checks sessionStorage first, then localStorage as fallback.
 *
 * @returns Parsed environment configuration or empty object if none found
 */
function getCachedEnvironmentConfig(): EnvironmentConfig {
  const configString =
    sessionStorage.getItem(STORAGE_KEY) ??
    localStorage.getItem(STORAGE_KEY) ??
    "{}";

  try {
    return JSON.parse(configString);
  } catch (error) {
    console.warn("Failed to parse cached environment config:", error);
    return {} as EnvironmentConfig;
  }
}

/**
 * Extracts Piral configuration from HTML meta tags.
 *
 * @returns Object containing piral URL and feed name, or null if not found
 */
function extractPiralConfig(): { piral: string; feed: string } | null {
  const piralUrl = document
    .querySelector(`meta[name="piral"]`)
    ?.getAttribute("content");

  const feedName = document
    .querySelector(`meta[name="feed"]`)
    ?.getAttribute("content");

  if (!piralUrl || !feedName) {
    console.warn("Piral configuration not found in meta tags");
    return null;
  }

  return { piral: piralUrl, feed: feedName };
}

/**
 * Fetches the Native Federation manifest from Piral.
 *
 * @param piralUrl - Base URL of the Piral instance
 * @param feedName - Name of the feed to fetch
 * @param config - Environment configuration for URL modifications
 * @returns Promise resolving to the manifest object
 */
async function fetchNativeFederationManifest(
  piralUrl: string,
  feedName: string,
  config: EnvironmentConfig
): Promise<Record<string, string>> {
  const manifestUrl = withTag(
    `${piralUrl}${PIRAL_ENDPOINTS.NATIVE_FEDERATION}/${feedName}`,
    config
  );

  try {
    const response = await fetch(manifestUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch manifest: ${response.status} ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Native Federation manifest:", error);
    throw error;
  }
}

/**
 * Enriches environment configuration with scope URLs for each remote.
 * The scope URL is derived from the remote entry URL by removing the filename.
 *
 * @param manifest - The Native Federation manifest
 * @param env - Environment configuration
 */
function appendScopeUrlToEnv(
  manifest: Record<string, string>,
  env: Record<string, EnvironmentConfig>
): void {
  Object.entries(manifest).forEach(([remoteName, remoteEntryUrl]) => {
    if (!env[remoteName]) {
      env[remoteName] = {};
    }

    // Extract the scope URL by removing the filename from the remote entry URL
    const lastSlashIndex = remoteEntryUrl.lastIndexOf("/");
    env[remoteName].scopeUrl =
      lastSlashIndex !== -1
        ? remoteEntryUrl.substring(0, lastSlashIndex)
        : remoteEntryUrl;
  });
}

/**
 * Initializes the Native Federation with the provided manifest and configuration.
 *
 * @param manifest - The federation manifest containing remote entry points
 * @param env - Environment configuration for all remotes
 * @param config - Environment configuration
 */
async function initializeNativeFederation(
  manifest: Record<string, string>,
  env: Record<string, any>,
  config: EnvironmentConfig
): Promise<void> {
  try {
    const federationOptions = {
      logLevel: "debug" as const,
      ...useShimImportMap({ shimMode: true }),
      storage: sessionStorageEntry,
      logger: consoleLogger,
      clearStorage: config.flush_cache,
    };

    const { loadRemoteModule } = await initFederation(
      manifest,
      federationOptions
    );

    const bootstrapper = createBootstrapper(
      loadRemoteModule as LoadRemoteModule<BootstrapModule>,
      env
    );

    window.dispatchEvent(
      new CustomEvent("mfe-loader-available", {
        detail: {
          mount: bootstrapper,
        },
      })
    );

    console.log("Native Federation initialized successfully");
  } catch (error) {
    console.error("Failed to initialize Native Federation:", error);
    throw error;
  }
}

/**
 * Main orchestrator initialization function.
 * Sets up Native Federation by:
 * 1. Loading cached configuration
 * 2. Extracting Piral configuration from meta tags
 * 3. Fetching environment variables and manifest from Piral
 * 4. Enriching environment with host/shell context
 * 5. Initializing the federation and dispatching "mfe-loader-available" event
 */
async function initializeOrchestrator(): Promise<void> {
  try {
    const cachedConfig = getCachedEnvironmentConfig();
    const piralConfig = extractPiralConfig();

    let manifest: Record<string, string> = {};
    let env: Record<string, EnvironmentConfig> = {};

    if (piralConfig) {
      const { piral, feed } = piralConfig;

      console.log(`Initializing with Piral: ${piral}, Feed: ${feed}`);

      const envUrl = withConfigFilter(
        withTag(`${piral}${PIRAL_ENDPOINTS.META}/${feed}`, cachedConfig)
      );
      env = await fetchPiralEnvVariables(envUrl);

      manifest = await fetchNativeFederationManifest(piral, feed, cachedConfig);

      env.manifest = env.manifest ?? manifest;
    } else {
      console.log(
        "No Piral configuration found, initializing with empty manifest"
      );
    }

    appendScopeUrlToEnv(manifest, env);

    await initializeNativeFederation(manifest, env, cachedConfig);
  } catch (error) {
    console.error("Orchestrator initialization failed:", error);

    window.dispatchEvent(
      new CustomEvent("mfe-loader-error", {
        detail: { error },
      })
    );
  }
}

initializeOrchestrator();
