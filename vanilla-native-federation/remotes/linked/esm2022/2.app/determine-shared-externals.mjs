import { NFError } from "lib/native-federation.error";
const createDetermineSharedExternals = (config, ports) => {
  function updateVersionActions(externalName, external) {
    if (external.versions.length === 1) {
      external.versions[0].action = "share";
      external.dirty = false;
      return external;
    }
    let sharedVersion = external.versions.find((v) => v.host);
    if (!sharedVersion && config.profile.latestSharedExternal) {
      sharedVersion = external.versions[0];
    }
    if (!sharedVersion) {
      let leastExtraDownloads = Number.MAX_VALUE;
      external.versions.forEach((vA) => {
        const extraDownloads = external.versions.filter((vB) => !vB.cached && vB.strictVersion && !ports.versionCheck.isCompatible(vA.version, vB.requiredVersion)).length;
        if (extraDownloads < leastExtraDownloads) {
          leastExtraDownloads = extraDownloads;
          sharedVersion = vA;
        }
      });
    }
    if (!sharedVersion) throw new NFError(`[${externalName}] Could not determine shared version!`);
    external.versions.forEach((v) => {
      if (ports.versionCheck.isCompatible(sharedVersion.version, v.requiredVersion)) {
        v.action = "skip";
        return;
      }
      if (config.strict && v.strictVersion) {
        throw new NFError(`[${externalName}] Shared version ${sharedVersion.version} is not compatible with range '${v.requiredVersion}'`);
      }
      config.log.warn(`[${externalName}] Shared version ${sharedVersion.version} is not compatible with range '${v.requiredVersion}'`);
      v.action = v.strictVersion ? "scope" : "skip";
    });
    sharedVersion.action = "share";
    external.dirty = false;
    return external;
  }
  return () => {
    const sharedExternals = ports.sharedExternalsRepo.getAll();
    try {
      Object.entries(sharedExternals).filter(([_, e]) => e.dirty).forEach(([name, external]) => {
        ports.sharedExternalsRepo.addOrUpdate(name, updateVersionActions(name, external));
      });
      config.log.debug("Processed shared externals", sharedExternals);
      return Promise.resolve();
    } catch (err) {
      config.log.error("Failed to determine shared externals", err);
      config.log.debug("Currently processed shared externals", sharedExternals);
      return Promise.reject(new NFError("Failed to determine shared externals."));
    }
  };
};
export {
  createDetermineSharedExternals
};
