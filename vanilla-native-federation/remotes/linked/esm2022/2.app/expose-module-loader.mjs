import { NFError } from "lib/native-federation.error";
import * as _path from "lib/utils/path";
const createExposeModuleLoader = (config, ports) => {
  function loadRemoteModule(remoteName, exposedModule) {
    try {
      if (!ports.remoteInfoRepo.contains(remoteName)) {
        throw new NFError(`Remote '${remoteName}' is not initialized.`);
      }
      const remoteModuleUrl = ports.remoteInfoRepo.tryGetModule(remoteName, exposedModule).orThrow(new NFError(`Exposed module '${exposedModule}' from remote '${remoteName}' not found in storage.`));
      config.log.debug(`Loading initialized module '${remoteModuleUrl}'`);
      return ports.browser.importModule(remoteModuleUrl);
    } catch (err) {
      config.log.error(`Failed to load module ${_path.join(remoteName, exposedModule)}: `, err);
      return Promise.reject(new NFError(`Failed to load module ${_path.join(remoteName, exposedModule)}`));
    }
  }
  return () => Promise.resolve(loadRemoteModule);
};
export {
  createExposeModuleLoader
};
