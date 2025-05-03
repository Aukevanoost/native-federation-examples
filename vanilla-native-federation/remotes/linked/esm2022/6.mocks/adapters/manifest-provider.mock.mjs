import { MOCK_MANIFEST } from "../domain/manifest.mock";
const mockManifestProvider = () => ({
  provide: jest.fn((manifest) => {
    return Promise.resolve(
      typeof manifest === "string" ? MOCK_MANIFEST() : manifest
    );
  })
});
export {
  mockManifestProvider
};
