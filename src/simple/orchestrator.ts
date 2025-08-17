import "es-module-shims";

import { initFederation } from "vanilla-native-federation";
import { NFOptions, useShimImportMap } from "vanilla-native-federation/options";

(async () => {
  try {
    const feedServiceUrl = document
      .querySelector(`meta[name="piral"]`)
      ?.getAttribute("content")!;

    const { loadRemoteModule } = await initFederation(feedServiceUrl, {
      logLevel: "debug",
      ...useShimImportMap({ shimMode: true }),
    } as NFOptions);

    window.dispatchEvent(
      new CustomEvent("mfe-loader-available", {
        detail: {
          loadRemoteModule,
        },
      })
    );
  } catch (error) {
    console.error("Orchestrator initialization failed:", error);
  }
})();
