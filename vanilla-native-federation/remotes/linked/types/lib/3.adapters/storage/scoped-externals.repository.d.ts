import type { StorageConfig } from "lib/2.app/config/storage.contract";
import type { ForScopedExternalsStorage } from "lib/2.app/driving-ports/for-scoped-externals-storage.port";
declare const createScopedExternalsRepository: (config: StorageConfig) => ForScopedExternalsStorage;
export { createScopedExternalsRepository };
