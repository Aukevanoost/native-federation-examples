import * as _path from "lib/utils/path";
import { NFError } from "lib/native-federation.error";
const createGenerateImportMap = (config, ports) => {
  function addRemoteInfos(importMap) {
    const remotes = ports.remoteInfoRepo.getAll();
    Object.entries(remotes).forEach(([remoteName, remote]) => {
      remote.exposes.forEach((exposed) => {
        const moduleName = _path.join(remoteName, exposed.moduleName);
        importMap.imports[moduleName] = _path.join(remote.scopeUrl, exposed.file);
      });
    });
    return importMap;
  }
  function addScopedExternals(importMap) {
    const scopedExternals = ports.scopedExternalsRepo.getAll();
    Object.entries(scopedExternals).forEach(([scope, externals]) => {
      if (!importMap.scopes) importMap.scopes = {};
      importMap.scopes[scope] = Object.entries(externals).reduce((modules, [external, version]) => {
        modules[external] = _path.join(scope, version.file);
        return modules;
      }, {});
    });
    return importMap;
  }
  const addVersionToImportMap = (externalName) => (importMap, version) => {
    if (version.action === "skip") return importMap;
    if (version.action === "scope") {
      const scope = _path.getScope(version.file);
      if (!importMap.scopes) importMap.scopes = {};
      if (!importMap.scopes[scope]) importMap.scopes[scope] = {};
      importMap.scopes[scope][externalName] = version.file;
      version.cached = true;
      return importMap;
    }
    if (!!importMap.imports[externalName]) {
      if (config.strict) {
        config.log.error(`Singleton external ${externalName} has multiple shared versions.`);
        throw new NFError("Could not create ImportMap.");
      }
      config.log.warn(`Singleton external ${externalName} has multiple shared versions.`);
      return importMap;
    }
    importMap.imports[externalName] = version.file;
    version.cached = true;
    return importMap;
  };
  function addSharedExternals(importMap) {
    const sharedExternals = ports.sharedExternalsRepo.getAll();
    Object.entries(sharedExternals).forEach(([externalName, external]) => {
      importMap = external.versions.reduce(addVersionToImportMap(externalName), importMap);
      ports.sharedExternalsRepo.addOrUpdate(externalName, external);
    });
    return importMap;
  }
  return () => {
    return Promise.resolve({ imports: {} }).then(addRemoteInfos).then(addScopedExternals).then(addSharedExternals);
  };
};
export {
  createGenerateImportMap
};
