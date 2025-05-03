import type { StorageConfig } from "lib/2.app/config/storage.contract";
import type { ForRemoteInfoStorage } from "lib/2.app/driving-ports/for-remote-info-storage.port";
declare const createRemoteInfoRepository: (config: StorageConfig) => ForRemoteInfoStorage;
export { createRemoteInfoRepository };
