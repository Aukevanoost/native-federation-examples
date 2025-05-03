import { MOCK_REMOTE_ENTRY_SCOPE_I_URL, MOCK_REMOTE_ENTRY_SCOPE_II_URL } from "./remote-entry/remote-entry.mock";
const MOCK_MANIFEST = () => ({
  "team/mfe1": `${MOCK_REMOTE_ENTRY_SCOPE_I_URL()}remoteEntry.json`,
  "team/mfe2": `${MOCK_REMOTE_ENTRY_SCOPE_II_URL()}remoteEntry.json`
});
export {
  MOCK_MANIFEST
};
