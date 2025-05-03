import { globalThisStorageEntry } from "./global-this.storage";
const createStorageConfig = (override) => ({
  storage: globalThisStorageEntry(override.storageNamespace ?? "__NATIVE_FEDERATION__"),
  clearStorage: override.clearStorage ?? false
});
export {
  createStorageConfig
};
