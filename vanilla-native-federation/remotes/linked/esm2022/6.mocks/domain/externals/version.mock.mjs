import { MOCK_HOST_REMOTE_ENTRY_SCOPE_URL, MOCK_REMOTE_ENTRY_SCOPE_I_URL, MOCK_REMOTE_ENTRY_SCOPE_II_URL } from "../remote-entry/remote-entry.mock";
const MOCK_VERSION_I = () => ({
  version: "1.2.3",
  file: `dep-a.js`
});
const MOCK_VERSION_II = () => ({
  version: "4.5.6",
  file: `${MOCK_REMOTE_ENTRY_SCOPE_I_URL()}dep-b.js`,
  requiredVersion: "^4.1.1",
  strictVersion: true,
  host: false,
  cached: true,
  action: "share"
});
const MOCK_VERSION_III = () => ({
  version: "7.8.9",
  file: `${MOCK_REMOTE_ENTRY_SCOPE_II_URL()}dep-c.js`,
  requiredVersion: "~7.0.0",
  strictVersion: true,
  host: false,
  cached: false,
  action: "skip"
});
const MOCK_VERSION_IV = () => ({
  version: "2.2.2",
  file: `${MOCK_REMOTE_ENTRY_SCOPE_II_URL()}dep-d.js`,
  requiredVersion: "^2.0.0",
  strictVersion: true,
  host: false,
  cached: true,
  action: "scope"
});
const MOCK_VERSION_V = () => ({
  version: "7.8.8",
  file: `${MOCK_HOST_REMOTE_ENTRY_SCOPE_URL()}dep-c.js`,
  requiredVersion: "~7.0.0",
  strictVersion: true,
  host: true,
  cached: true,
  action: "share"
});
const MOCK_VERSION_VI = () => ({
  version: "3.0.0",
  file: `${MOCK_HOST_REMOTE_ENTRY_SCOPE_URL()}dep-d.js`,
  requiredVersion: "~3.0.0",
  strictVersion: true,
  host: true,
  cached: true,
  action: "share"
});
export {
  MOCK_VERSION_I,
  MOCK_VERSION_II,
  MOCK_VERSION_III,
  MOCK_VERSION_IV,
  MOCK_VERSION_V,
  MOCK_VERSION_VI
};
