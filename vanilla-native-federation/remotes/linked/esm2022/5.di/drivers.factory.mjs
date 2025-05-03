import { createCommitChanges } from "lib/2.app/commit-changes";
import { createDetermineSharedExternals } from "lib/2.app/determine-shared-externals";
import { createGenerateImportMap } from "lib/2.app/generate-import-map";
import { createGetRemoteEntries } from "lib/2.app/get-remote-entries";
import { createProcessRemoteEntries } from "lib/2.app/process-remote-entries";
import { createExposeModuleLoader } from "lib/2.app/expose-module-loader";
const createDrivers = (config, adapters) => ({
  getRemoteEntries: createGetRemoteEntries(config, adapters),
  processRemoteEntries: createProcessRemoteEntries(config, adapters),
  determineSharedExternals: createDetermineSharedExternals(config, adapters),
  generateImportMap: createGenerateImportMap(config, adapters),
  commitChanges: createCommitChanges(adapters),
  exposeModuleLoader: createExposeModuleLoader(config, adapters)
});
export {
  createDrivers
};
