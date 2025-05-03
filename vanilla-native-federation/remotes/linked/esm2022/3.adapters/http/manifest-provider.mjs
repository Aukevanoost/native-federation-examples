import { NFError } from "lib/native-federation.error";
const createManifestProvider = () => {
  const mapToJson = (response) => {
    if (!response.ok) return Promise.reject(new NFError(`${response.status} - ${response.statusText}`));
    return response.json();
  };
  const formatError = (remoteEntryUrl) => (err) => {
    const msg = err instanceof Error ? err.message : String(err);
    throw new NFError(`Fetch of '${remoteEntryUrl}' returned ${msg}`);
  };
  return {
    provide: async function(remotesOrManifestUrl) {
      if (typeof remotesOrManifestUrl !== "string")
        return Promise.resolve(remotesOrManifestUrl);
      return fetch(remotesOrManifestUrl).then(mapToJson).catch(formatError(remotesOrManifestUrl));
    }
  };
};
export {
  createManifestProvider
};
