import "es-module-shims";

import { initFederation } from "@softarc/native-federation-orchestrator";
import {
  consoleLogger,
  NFOptions,
  sessionStorageEntry,
  useShimImportMap,
} from "@softarc/native-federation-orchestrator/options";

(async () => {
  try {
    const feedServiceUrl = document.querySelector(`meta[name="piral"]`)?.getAttribute("content")!;

    /*
     * Read more about this in the docs:
     * https://github.com/native-federation/orchestrator/blob/main/docs/config.md
     */
    const options: NFOptions = {
      logLevel: "debug",
      logger: consoleLogger,
      profile: {
        latestSharedExternal: false,
        overrideCachedRemotes: "init-only",
        overrideCachedRemotesIfURLMatches: true,
      },
      storage: sessionStorageEntry,
      ...useShimImportMap({ shimMode: true }),
    };
    const { loadRemoteModule, initRemoteEntry } = await initFederation(feedServiceUrl, options);

    window.dispatchEvent(
      new CustomEvent("mfe-loader-available", {
        detail: {
          loadRemoteModule,
          initRemoteEntry,
        },
      }),
    );
  } catch (error) {
    console.error("Orchestrator initialization failed:", error);
  }
})();
