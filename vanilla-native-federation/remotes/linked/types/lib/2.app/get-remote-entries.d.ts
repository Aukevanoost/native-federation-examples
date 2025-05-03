import type { ForGettingRemoteEntries } from "./driver-ports/for-getting-remote-entries.port";
import type { DrivingContract } from "./driving-ports/driving.contract";
import type { LoggingConfig } from "./config/log.contract";
import type { ModeConfig } from "./config/mode.contract";
import type { HostConfig } from "./config/host.contract";
/**
 * Step 1: Fetch the remoteEntry JSON objects:
 *
 * A Manifest or URL to a Manifest is used as the input.  Based on the defined remotes
 * in the manifest, the library will download the remoteEntry.json files which contain the
 * metadata of the defined remotes (name, exposed modules and required dependencies a.k.a. externals)
 *
 * @param config
 * @param adapters
 * @returns A list of the remoteEntry json objects
 */
declare const createGetRemoteEntries: (config: LoggingConfig & ModeConfig & HostConfig, ports: Pick<DrivingContract, "remoteEntryProvider" | "manifestProvider" | "remoteInfoRepo">) => ForGettingRemoteEntries;
export { createGetRemoteEntries };
