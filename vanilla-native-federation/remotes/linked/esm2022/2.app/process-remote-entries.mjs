import * as _path from "lib/utils/path";
const createProcessRemoteEntries = (config, ports) => {
  function addRemoteInfoToStorage({ name, url, exposes }) {
    const scopeUrl = _path.getScope(url);
    ports.remoteInfoRepo.addOrUpdate(name, {
      scopeUrl,
      exposes: Object.values(exposes ?? []).map((m) => ({
        moduleName: m.key,
        file: m.outFileName
      }))
    });
  }
  function addExternalsToStorage(remoteEntry) {
    const scopeUrl = _path.getScope(remoteEntry.url);
    remoteEntry.shared.forEach((external) => {
      if (!external.version || !ports.versionCheck.isValidSemver(external.version)) {
        config.log.warn(`[${remoteEntry.name}][${external.packageName}] Version '${external.version}' is not a valid version, skipping version.`);
        return;
      }
      if (external.singleton) {
        addSharedExternal(scopeUrl, external, remoteEntry.host);
      } else {
        addScopedExternal(scopeUrl, external);
      }
    });
  }
  function addSharedExternal(scope, sharedInfo, isHostVersion) {
    const cached = ports.sharedExternalsRepo.tryGetVersions(sharedInfo.packageName).orElse([]);
    const matchingVersionIDX = cached.findIndex((c) => c.version === sharedInfo.version);
    if (~matchingVersionIDX) {
      if (cached[matchingVersionIDX].host || !isHostVersion) {
        config.log.debug(`[${scope}][${sharedInfo.packageName}] Shared version '${sharedInfo.version}' already exists, skipping version.`);
        return;
      }
      delete cached[matchingVersionIDX];
    }
    cached.push({
      version: sharedInfo.version,
      file: _path.join(scope, sharedInfo.outFileName),
      requiredVersion: sharedInfo.requiredVersion,
      strictVersion: sharedInfo.strictVersion,
      host: !!isHostVersion,
      cached: false,
      action: "skip"
    });
    ports.sharedExternalsRepo.addOrUpdate(
      sharedInfo.packageName,
      { dirty: true, versions: cached.sort((a, b) => ports.versionCheck.compare(b.version, a.version)) }
    );
  }
  function addScopedExternal(scope, sharedInfo) {
    ports.scopedExternalsRepo.addExternal(
      scope,
      sharedInfo.packageName,
      {
        version: sharedInfo.version,
        file: sharedInfo.outFileName
      }
    );
  }
  function logStorageStatus(status) {
    config.log.debug(status, {
      "remotes": ports.remoteInfoRepo.getAll(),
      "shared-externals": ports.sharedExternalsRepo.getAll(),
      "scoped-externals": ports.scopedExternalsRepo.getAll()
    });
  }
  return (remoteEntries) => {
    if (config.log.level === "debug") logStorageStatus("Storage: before processing remoteEntries");
    remoteEntries.forEach((remoteEntry) => {
      addRemoteInfoToStorage(remoteEntry);
      addExternalsToStorage(remoteEntry);
    });
    if (config.log.level === "debug") logStorageStatus("Storage: before processing remoteEntries");
    return Promise.resolve();
  };
};
export {
  createProcessRemoteEntries
};
