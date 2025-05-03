import { MOCK_REMOTE_ENTRY_SCOPE_I_URL } from "../remote-entry/remote-entry.mock";
const MOCK_REMOTE_INFO_I = () => ({
  scopeUrl: MOCK_REMOTE_ENTRY_SCOPE_I_URL(),
  exposes: [{ moduleName: "./wc-comp-a", file: "component-a.js" }]
});
const MOCK_REMOTE_INFO_II = () => ({
  scopeUrl: MOCK_REMOTE_ENTRY_SCOPE_I_URL(),
  exposes: [{ moduleName: "./wc-comp-b", file: "component-b.js" }]
});
export {
  MOCK_REMOTE_INFO_I,
  MOCK_REMOTE_INFO_II
};
