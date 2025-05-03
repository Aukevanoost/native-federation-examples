const MOCK_SHARED_INFO_I = () => ({
  version: "1.2.3",
  requiredVersion: "~1.2.1",
  strictVersion: false,
  singleton: false,
  packageName: "dep-a",
  outFileName: "dep-a.js"
});
const MOCK_SHARED_INFO_II = () => ({
  version: "4.5.6",
  requiredVersion: "^4.1.1",
  strictVersion: true,
  singleton: true,
  packageName: "dep-b",
  outFileName: "dep-b.js"
});
const MOCK_SHARED_INFO_III = () => ({
  version: "7.8.9",
  requiredVersion: "~7.0.0",
  strictVersion: true,
  singleton: true,
  packageName: "dep-c",
  outFileName: "dep-c.js"
});
const MOCK_SHARED_INFO_IV = () => ({
  version: "2.2.2",
  requiredVersion: "^2.0.0",
  strictVersion: true,
  singleton: true,
  packageName: "dep-d",
  outFileName: "dep-d.js"
});
const MOCK_SHARED_INFO_V = () => ({
  version: "7.8.8",
  requiredVersion: "~7.0.0",
  strictVersion: true,
  singleton: true,
  packageName: "dep-c",
  outFileName: "dep-c.js"
});
const MOCK_SHARED_INFO_VI = () => ({
  version: "3.0.0",
  requiredVersion: "~3.0.0",
  strictVersion: true,
  singleton: true,
  packageName: "dep-d",
  outFileName: "dep-d.js"
});
const MOCK_EXPOSES_INFO_I = () => ({
  key: "./wc-comp-a",
  outFileName: "component-a.js"
});
const MOCK_EXPOSES_INFO_II = () => ({
  key: "./wc-comp-b",
  outFileName: "component-b.js"
});
const MOCK_EXPOSES_INFO_III = () => ({
  key: "./wc-comp-c",
  outFileName: "component-c.js"
});
const MOCK_FEDERATION_INFO_I = () => ({
  name: "team/mfe1",
  exposes: [
    MOCK_EXPOSES_INFO_I()
  ],
  shared: [
    MOCK_SHARED_INFO_I(),
    MOCK_SHARED_INFO_II()
  ]
});
const MOCK_FEDERATION_INFO_II = () => ({
  name: "team/mfe2",
  exposes: [
    MOCK_EXPOSES_INFO_II(),
    MOCK_EXPOSES_INFO_III()
  ],
  shared: [
    MOCK_SHARED_INFO_III(),
    MOCK_SHARED_INFO_IV()
  ]
});
const MOCK_HOST_FEDERATION_INFO = () => ({
  name: "host",
  exposes: [],
  shared: [
    MOCK_SHARED_INFO_V(),
    MOCK_SHARED_INFO_VI()
  ]
});
export {
  MOCK_EXPOSES_INFO_I,
  MOCK_EXPOSES_INFO_II,
  MOCK_EXPOSES_INFO_III,
  MOCK_FEDERATION_INFO_I,
  MOCK_FEDERATION_INFO_II,
  MOCK_HOST_FEDERATION_INFO,
  MOCK_SHARED_INFO_I,
  MOCK_SHARED_INFO_II,
  MOCK_SHARED_INFO_III,
  MOCK_SHARED_INFO_IV,
  MOCK_SHARED_INFO_V,
  MOCK_SHARED_INFO_VI
};
