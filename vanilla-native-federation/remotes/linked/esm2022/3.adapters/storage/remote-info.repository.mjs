import * as _path from "lib/utils/path";
import { Optional } from "lib/utils/optional";
const createRemoteInfoRepository = (config) => {
  const STORAGE = config.storage("remotes", {});
  if (config.clearStorage) STORAGE.clear();
  const _cache = STORAGE.get() ?? {};
  return {
    contains: function(remoteName) {
      return !!_cache[remoteName];
    },
    addOrUpdate: function(remoteName, remote) {
      _cache[remoteName] = remote;
      return this;
    },
    tryGetModule: function(remoteName, exposedModule) {
      return Optional.of(_cache[remoteName]?.exposes.find((m) => m.moduleName === exposedModule)).map((m) => _path.join(_cache[remoteName].scopeUrl, m.file));
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
  createRemoteInfoRepository
};
