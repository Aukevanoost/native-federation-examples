const mockSharedExternalsRepository = () => ({
  addOrUpdate: jest.fn(),
  getAll: jest.fn(),
  commit: jest.fn(),
  tryGetVersions: jest.fn()
});
export {
  mockSharedExternalsRepository
};
