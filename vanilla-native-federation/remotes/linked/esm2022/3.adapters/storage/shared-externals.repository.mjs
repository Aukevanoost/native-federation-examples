import { Optional } from "lib/utils/optional";
const createSharedExternalsRepository = (config) => {
  const STORAGE = config.storage("shared-externals", {});
  if (config.clearStorage) STORAGE.clear();
  const _cache = STORAGE.get();
  return {
    getAll: function() {
      return { ..._cache };
    },
    addOrUpdate: function(externalName, external) {
      _cache[externalName] = external;
      return this;
    },
    tryGetVersions: function(external) {
      return Optional.of(_cache[external]?.versions);
    },
    commit: function() {
      STORAGE.set(_cache);
      return this;
    }
  };
};
export {
  createSharedExternalsRepository
};
