import { MOCK_VERSION_I, MOCK_VERSION_II, MOCK_VERSION_III, MOCK_VERSION_IV, MOCK_VERSION_V, MOCK_VERSION_VI } from "./version.mock";
const MOCK_EXTERNALS_SCOPE = () => ({
  "dep-a": MOCK_VERSION_I()
});
const MOCK_SHARED_EXTERNAL_I = () => ({
  dirty: false,
  versions: [MOCK_VERSION_II()]
});
const MOCK_SHARED_EXTERNAL_II = () => ({
  dirty: false,
  versions: [MOCK_VERSION_III(), MOCK_VERSION_V()]
});
const MOCK_SHARED_EXTERNAL_III = () => ({
  dirty: false,
  versions: [MOCK_VERSION_IV(), MOCK_VERSION_VI()]
});
const MOCK_SHARED_EXTERNALS = () => ({
  "dep-b": MOCK_SHARED_EXTERNAL_I(),
  "dep-c": MOCK_SHARED_EXTERNAL_II(),
  "dep-d": MOCK_SHARED_EXTERNAL_III()
});
export {
  MOCK_EXTERNALS_SCOPE,
  MOCK_SHARED_EXTERNALS,
  MOCK_SHARED_EXTERNAL_I,
  MOCK_SHARED_EXTERNAL_II,
  MOCK_SHARED_EXTERNAL_III
};
