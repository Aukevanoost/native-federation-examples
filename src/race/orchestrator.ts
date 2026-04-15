import "es-module-shims";

import { initFederation } from "@softarc/native-federation-orchestrator";
import { NFEventRegistry } from "@softarc/native-federation-orchestrator/registry";
import {
  NFOptions,
  useShimImportMap,
  sessionStorageEntry,
} from "@softarc/native-federation-orchestrator/options";

declare global {
  interface Window {
    __NF_REGISTRY__: NFEventRegistry;
  }
}

let amountOfClicks = 0;
const unsubscribeA = window.__NF_REGISTRY__.on("events-mfe:clicked", (event) => {
  console.log("Event clicked:", event.data);
  amountOfClicks++;
  if (amountOfClicks === 3) {
    console.log("Received 3 clicks, unsubscribing from further 'clicked' events.");
    unsubscribeA();
  }
});

const unsubscribeB = window.__NF_REGISTRY__.on("events-mfe:request-action", (event) => {
  console.log("An action needs to be performed!", event.data);
  // Handle event
});

// unsubscribeB(); // Call this to stop listening to navigation events

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
      }),
    );
    if ((window as any).__NF_REGISTRY__ !== undefined) {
      ((window as any).__NF_REGISTRY__ as NFEventRegistry).register("orch.init-ready", {
        loadRemoteModule,
      });
    }
  } catch (error) {
    console.error("Orchestrator initialization failed:", error);
  }
})();
