import { MOCK_FEDERATION_INFO_I, MOCK_FEDERATION_INFO_II, MOCK_HOST_FEDERATION_INFO } from "./federation-info.mock";
const MOCK_REMOTE_ENTRY_SCOPE_I_URL = () => "http://my.service/mfe1/";
const MOCK_REMOTE_ENTRY_SCOPE_II_URL = () => "http://my.service/mfe2/";
const MOCK_HOST_REMOTE_ENTRY_SCOPE_URL = () => "http://host.service/";
const MOCK_REMOTE_ENTRY_I = () => ({
  ...MOCK_FEDERATION_INFO_I(),
  url: `${MOCK_REMOTE_ENTRY_SCOPE_I_URL()}remoteEntry.json`
});
const MOCK_REMOTE_ENTRY_II = () => ({
  ...MOCK_FEDERATION_INFO_II(),
  url: `${MOCK_REMOTE_ENTRY_SCOPE_II_URL()}remoteEntry.json`
});
const MOCK_HOST_REMOTE_ENTRY = () => ({
  ...MOCK_HOST_FEDERATION_INFO(),
  url: `${MOCK_HOST_REMOTE_ENTRY_SCOPE_URL()}remoteEntry.json`,
  host: true
});
export {
  MOCK_HOST_REMOTE_ENTRY,
  MOCK_HOST_REMOTE_ENTRY_SCOPE_URL,
  MOCK_REMOTE_ENTRY_I,
  MOCK_REMOTE_ENTRY_II,
  MOCK_REMOTE_ENTRY_SCOPE_II_URL,
  MOCK_REMOTE_ENTRY_SCOPE_I_URL
};
