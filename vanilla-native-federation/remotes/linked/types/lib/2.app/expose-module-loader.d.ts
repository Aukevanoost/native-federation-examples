import type { DrivingContract } from "./driving-ports/driving.contract";
import type { ForExposingModuleLoader } from "./driver-ports/for-exposing-module-loader.port";
import type { LoggingConfig } from "./config/log.contract";
/**
 * Step 6: expose module loader
 *
 * The module loader can only be used after the importmap was generated and added to
 * the DOM, hence the module loader fn is exposed to the host after the final commit
 * step.
 *
 * The loadRemoteModule is also a callback that is returned as a promise by the initFederation
 * function. This way the loadRemoteModule can be shared througout the host application using
 * CustomEvents or by adding it to the global Window object for easy access.
 *
 * @param adapters
 */
declare const createExposeModuleLoader: (config: LoggingConfig, ports: Pick<DrivingContract, "remoteInfoRepo" | "browser">) => ForExposingModuleLoader;
export { createExposeModuleLoader };
