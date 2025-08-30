import "es-module-shims";

import { initFederation } from "vanilla-native-federation";
import {
  consoleLogger,
  NFOptions,
  sessionStorageEntry,
  useShimImportMap,
} from "vanilla-native-federation/options";

(async () => {
  try {
    const feedServiceUrl = document.querySelector(`meta[name="piral"]`)?.getAttribute("content")!;

    const { loadRemoteModule, initRemoteEntry } = await initFederation(feedServiceUrl, {
      logLevel: "debug",
      logger: consoleLogger,
      profile: {
        latestSharedExternal: false,
        overrideCachedRemotes: "init-only",
        overrideCachedRemotesIfURLMatches: true,
      },
      storage: sessionStorageEntry,
      ...useShimImportMap({ shimMode: true }),
    } as NFOptions);

    window.dispatchEvent(
      new CustomEvent("mfe-loader-available", {
        detail: {
          loadRemoteModule,
          initRemoteEntry,
        },
      })
    );
  } catch (error) {
    console.error("Orchestrator initialization failed:", error);
  }
})();
