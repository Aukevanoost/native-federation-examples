import type { ForDeterminingSharedExternals } from "./driver-ports/for-determining-shared-externals.port";
import type { DrivingContract } from "./driving-ports/driving.contract";
import type { LoggingConfig } from "./config/log.contract";
import type { ModeConfig } from "./config/mode.contract";
/**
 * Step 3: Determine which version is the optimal version to share.
 *
 * The shared external versions that were merged into the cache/storage caused the shared
 * external to be 'dirty', this step cleans all dirty externals in the storage by calculating
 * the most optimal version to share since only 1 version can be shared globally. All other
 * versions that are compatible are skipped and the incompatible ones are defined as scoped external.
 *
 * Check the docs for a full explanation of the dependency resolver.
 *
 * Priority:
 * 1) Latest external defined in 'host' remoteEntry (if available).
 * 2) If defined in config, prioritize latest available version.
 * 3) Find most optimal version, by comparing potential extra downloads per version.
 *
 * @param config
 * @param adapters
 * @returns
 */
declare const createDetermineSharedExternals: (config: LoggingConfig & ModeConfig, ports: Pick<DrivingContract, "versionCheck" | "sharedExternalsRepo">) => ForDeterminingSharedExternals;
export { createDetermineSharedExternals };
