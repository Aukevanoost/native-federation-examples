/**
 * Native Federation Orchestrator
 *
 * This module serves as the central orchestrator for micro frontends using vanilla-native-federation.
 * It handles the initialization, configuration, and bootstrapping of remote micro frontend applications.
 */

import "es-module-shims";

import { initFederation } from "vanilla-native-federation";
import { NFOptions } from "vanilla-native-federation/options";
import { useShimImportMap } from "vanilla-native-federation/options";
import { extractPiralConfig } from "./utils/piral";

/**
 * API endpoints for Piral integration
 */
const PIRAL_ENDPOINTS = {
  NATIVE_FEDERATION: "/api/v1/native-federation",
} as const;

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
  feedName: string
): Promise<Record<string, string>> {
  const manifestUrl = `${piralUrl}${PIRAL_ENDPOINTS.NATIVE_FEDERATION}/${feedName}`;

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
 * Initializes the Native Federation with the provided manifest and configuration.
 *
 * @param manifest - The federation manifest containing remote entry points
 * @param env - Environment configuration for all remotes
 * @param config - Environment configuration
 */
async function initializeNativeFederation(
  manifest: Record<string, string>
): Promise<void> {
  try {
    const federationOptions: NFOptions = {
      logLevel: "debug",
      ...useShimImportMap({ shimMode: true }), // Add legacy-browser support
    };

    const { loadRemoteModule } = await initFederation(
      manifest,
      federationOptions
    );

    window.dispatchEvent(
      new CustomEvent("mfe-loader-available", {
        detail: {
          loadRemoteModule,
        },
      })
    );

    console.log("Native Federation initialized successfully");
  } catch (error) {
    console.error("Failed to initialize Native Federation:", error);
    throw error;
  }
}

(async () => {
  try {
    const piralConfig = extractPiralConfig();

    let manifest: Record<string, string> = await fetchNativeFederationManifest(
      piralConfig.piral,
      piralConfig.feed
    );

    await initializeNativeFederation(manifest);
  } catch (error) {
    console.error("Orchestrator initialization failed:", error);

    window.dispatchEvent(
      new CustomEvent("mfe-loader-error", {
        detail: { error },
      })
    );
  }
})();
