import "es-module-shims";

import { initFederation } from "vanilla-native-federation";
import { ResourceRegistry } from "vanilla-native-federation/sdk";
import {
  NFOptions,
  useShimImportMap,
  sessionStorageEntry,
} from "vanilla-native-federation/options";

(async () => {
  try {
    const feedServiceUrl = document.querySelector(`meta[name="piral"]`)?.getAttribute("content")!;

    const { loadRemoteModule } = await initFederation(feedServiceUrl, {
      logLevel: "debug",
      storage: sessionStorageEntry,
      ...useShimImportMap({ shimMode: true }),
    } as NFOptions);

    window.dispatchEvent(
      new CustomEvent("mfe-loader-available", {
        detail: {
          loadRemoteModule,
        },
      })
    );
    if ((window as any).__NF_REGISTRY__ !== undefined) {
      ((window as any).__NF_REGISTRY__ as ResourceRegistry).register("orch.init-ready", {
        loadRemoteModule,
      });
    }
  } catch (error) {
    console.error("Orchestrator initialization failed:", error);
  }
})();
