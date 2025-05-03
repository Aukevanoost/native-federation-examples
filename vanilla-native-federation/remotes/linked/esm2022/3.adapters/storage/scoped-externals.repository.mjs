const createScopedExternalsRepository = (config) => {
  const STORAGE = config.storage("scoped-externals", {});
  if (config.clearStorage) STORAGE.clear();
  const _cache = STORAGE.get() ?? {};
  return {
    addExternal: function(scope, external, version) {
      if (!_cache[scope]) _cache[scope] = {};
      _cache[scope][external] = version;
      return this;
    },
    getAll: function() {
      return _cache;
    },
    commit: function() {
      STORAGE.set(_cache);
      return this;
    }
  };
};
export {
  createScopedExternalsRepository
};
