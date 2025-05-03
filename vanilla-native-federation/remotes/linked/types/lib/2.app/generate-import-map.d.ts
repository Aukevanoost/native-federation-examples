import type { ForGeneratingImportMap } from "./driver-ports/for-generating-import-map";
import type { DrivingContract } from "./driving-ports/driving.contract";
import type { LoggingConfig } from "./config/log.contract";
import type { ModeConfig } from "./config/mode.contract";
/**
 * Step 4: Generate an importMap from the cached remoteEntries
 *
 * The processed externals in the storage/cache (step 2 & 3) are used
 * to generate an importMap. The step returns the generated importMap object.
 *
 * @param config
 * @param adapters
 */
declare const createGenerateImportMap: (config: LoggingConfig & ModeConfig, ports: Pick<DrivingContract, "remoteInfoRepo" | "scopedExternalsRepo" | "sharedExternalsRepo">) => ForGeneratingImportMap;
export { createGenerateImportMap };
