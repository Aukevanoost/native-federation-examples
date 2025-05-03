import { NFError } from "lib/native-federation.error";
const createRemoteEntryProvider = () => {
  const mapToJson = (response) => {
    if (!response.ok) return Promise.reject(new Error(`${response.status} - ${response.statusText}`));
    return response.json();
  };
  const fillEmptyFields = (remoteEntryUrl) => (remoteEntry) => {
    if (!remoteEntry.exposes) remoteEntry.exposes = [];
    if (!remoteEntry.shared) remoteEntry.shared = [];
    if (!remoteEntry.url) remoteEntry.url = remoteEntryUrl;
    return remoteEntry;
  };
  const formatError = (remoteEntryUrl) => (err) => {
    const msg = err instanceof Error ? err.message : String(err);
    throw new NFError(`Fetch of '${remoteEntryUrl}' returned ${msg}`);
  };
  return {
    provide: async function(remoteEntryUrl) {
      return fetch(remoteEntryUrl).then(mapToJson).then(fillEmptyFields(remoteEntryUrl)).catch(formatError(remoteEntryUrl));
    }
  };
};
export {
  createRemoteEntryProvider
};
