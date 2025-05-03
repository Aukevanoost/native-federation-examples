import { NFError } from "lib/native-federation.error";
const createGetRemoteEntries = (config, ports) => (remotesOrManifestUrl = {}) => {
  function addHostRemoteEntry(manifest) {
    if (!!config.hostRemoteEntry) {
      manifest[config.hostRemoteEntry.name] = config.hostRemoteEntry.cacheTag ? `${config.hostRemoteEntry.url}?cacheTag=${config.hostRemoteEntry.cacheTag}` : config.hostRemoteEntry.url;
    }
    return manifest;
  }
  async function fetchRemoteEntries(manifest) {
    return Promise.all(
      Object.entries(manifest).map(fetchRemoteEntry)
    );
  }
  function fetchRemoteEntry([remoteName, remoteEntryUrl]) {
    if (config.profile.skipCachedRemotes && ports.remoteInfoRepo.contains(remoteName)) {
      config.log.debug(`Found remote '${remoteName}' in storage, omitting fetch.`);
      return Promise.resolve(false);
    }
    return ports.remoteEntryProvider.provide(remoteEntryUrl).then(verifyRemoteEntry(remoteName)).catch(handleFetchFailed);
  }
  const handleFetchFailed = (err) => {
    config.log.warn(`Failed to fetch remoteEntry.`, err);
    return config.strict ? Promise.reject(new NFError(`Could not fetch remoteEntry.`)) : Promise.resolve(false);
  };
  const verifyRemoteEntry = (remoteName) => (remoteEntry) => {
    if (!!config.hostRemoteEntry && remoteName === config.hostRemoteEntry.name) {
      remoteEntry.host = true;
      remoteEntry.name = config.hostRemoteEntry.name;
    }
    config.log.debug(`fetched '${remoteEntry.name}' from '${remoteEntry.url}', exposing: ${JSON.stringify(remoteEntry.exposes)}`);
    if (remoteEntry.name !== remoteName) {
      config.log.warn(`Fetched remote '${remoteEntry.name}' does not match requested '${remoteName}'.`);
    }
    return remoteEntry;
  };
  function removeSkippedRemotes(federationInfos) {
    return federationInfos.filter((info) => !!info);
  }
  return ports.manifestProvider.provide(remotesOrManifestUrl).catch((err) => {
    config.log.warn(`Failed to fetch manifest.`, err);
    return Promise.reject(new NFError(`Could not fetch manifest.`));
  }).then(addHostRemoteEntry).then(fetchRemoteEntries).then(removeSkippedRemotes);
};
export {
  createGetRemoteEntries
};
