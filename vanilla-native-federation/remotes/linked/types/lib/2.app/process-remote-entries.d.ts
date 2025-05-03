import type { ForProcessingRemoteEntries } from "./driver-ports/for-processing-remote-entries.port";
import type { DrivingContract } from "./driving-ports/driving.contract";
import type { LoggingConfig } from "./config/log.contract";
/**
 * Step 2: Process remoteEntry objects
 *
 * Extracts the externals and remote-info objects from the provided remoteEntry objects.
 * The metadata will be merged into the existing cache/storage but the changes are not persisted (yet).
 *
 * - For remotes and scoped externals that means a full replace.
 * - For shared externals that means merging the versions into the currently cached externals.
 *
 * @param config
 * @param adapters
 * @returns Promise<void>
 */
declare const createProcessRemoteEntries: (config: LoggingConfig, ports: Pick<DrivingContract, "remoteInfoRepo" | "sharedExternalsRepo" | "scopedExternalsRepo" | "versionCheck">) => ForProcessingRemoteEntries;
export { createProcessRemoteEntries };
