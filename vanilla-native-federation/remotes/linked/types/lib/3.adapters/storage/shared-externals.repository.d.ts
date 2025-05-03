import type { StorageConfig } from "lib/2.app/config/storage.contract";
import type { ForSharedExternalsStorage } from "lib/2.app/driving-ports/for-shared-externals-storage.port";
declare const createSharedExternalsRepository: (config: StorageConfig) => ForSharedExternalsStorage;
export { createSharedExternalsRepository };
