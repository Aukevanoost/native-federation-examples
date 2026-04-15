import { initFederation } from "@softarc/native-federation-orchestrator";
import { consoleLogger, localStorageEntry } from "@softarc/native-federation-orchestrator/options";

/**
 * An IIFE that auto-executes the orchestrator when the file is imported.
 */
(async () => {
  const { loadRemoteModule } = await initFederation(
    // Manifest
    {
      "team/mfe1": "http://localhost:3000/remoteEntry.json",
      "team/mfe2": "http://localhost:4000/remoteEntry.json",
    },
    // Options
    {
      logLevel: "error",
      logger: consoleLogger,
      storage: localStorageEntry,
      // ... see docs for all available options
    },
  );

  // Load specific modules
  const ButtonComponent = await loadRemoteModule("team/mfe1", "./Button");
  const HeaderComponent = await loadRemoteModule("team/mfe2", "./Header");
})();
