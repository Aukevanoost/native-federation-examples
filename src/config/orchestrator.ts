import "es-module-shims";

import { initFederation, LoadRemoteModule } from "@softarc/native-federation-orchestrator";
import {
  NFOptions,
  Logger,
  useShimImportMap,
} from "@softarc/native-federation-orchestrator/options";
import {
  ForRemoteInfoStorage,
  Optional,
  RemoteInfo,
} from "@softarc/native-federation-orchestrator/sdk";

export interface BootstrapModule {
  bootstrap: (config: Record<string, any>, loadRemoteModule: LoadRemoteModule) => unknown;
}

/**
 * Configuration interface for the micro frontend environment.
 * This configuration can be cached and used to customize behavior.
 */
export interface EnvironmentConfig {
  production?: boolean;
  domain?: string; // The url of the current domain (host/shell)
  scopeUrl?: string; // Base URL for micro frontends
  tag?: string; // latest or next?
}

/**
 * Creates a bootstrapper function for a micro frontend
 * module that includes environment configuration.
 */
function createBootstrapper(
  loadRemoteModule: LoadRemoteModule,
  remoteInfoRepo: ForRemoteInfoStorage,
  env: EnvironmentConfig,
): LoadRemoteModule {
  return async <TModule = unknown>(remoteName: string, exposedModule: string): Promise<TModule> => {
    const module = await loadRemoteModule<BootstrapModule>(remoteName, exposedModule);

    env.scopeUrl = (remoteInfoRepo.tryGet(remoteName) as Optional<RemoteInfo>)
      .map((info) => info.scopeUrl)
      .orElse("/");

    console.log(module);
    return module.bootstrap(env, loadRemoteModule) as TModule;
  };
}

/**
 * Retrieves the cached environment configuration from local storage.
 * (Conveniently sets the default values if not present)
 */
function getCachedEnvironmentConfig(): EnvironmentConfig {
  const configString = localStorage.getItem("__NATIVE_FEDERATION__.settings");

  if (!configString) {
    const configString = JSON.stringify({
      tag: "latest",
      domain: "https://localhost:4201",
      production: false,
    });
    localStorage.setItem("__NATIVE_FEDERATION__.settings", configString);
  }

  return JSON.parse(configString!);
}

/**
 * An IIFE that auto-executes the orchestrator when the file is imported.
 */
(async () => {
  let feedServiceUrl = document.querySelector(`meta[name="piral"]`)?.getAttribute("content")!;
  const env = getCachedEnvironmentConfig();
  if (env.tag) feedServiceUrl += "?tag=" + env.tag;

  /**
   * A custom logger
   */
  const consoleLogger: Logger = {
    debug: (step: number, msg: string, _err?: any) => console.log(`[${step}]: ${msg}`),
    error: (step: number, msg: string, _err?: any) => console.error(`[${step}]: ${msg}`),
    warn: (step: number, msg: string, _err?: any) => console.warn(`[${step}]: ${msg}`),
  };

  const { loadRemoteModule, adapters } = await initFederation(feedServiceUrl, {
    logLevel: "debug",
    logger: consoleLogger,
    ...useShimImportMap({ shimMode: true }),
  } as NFOptions);

  const bootstrapper = createBootstrapper(loadRemoteModule, adapters.remoteInfoRepo, env);

  window.dispatchEvent(
    new CustomEvent("mfe-loader-available", {
      detail: {
        mount: bootstrapper,
      },
    }),
  );
})();
