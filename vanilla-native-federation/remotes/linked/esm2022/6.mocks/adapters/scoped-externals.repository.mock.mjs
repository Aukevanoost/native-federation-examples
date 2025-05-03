const mockScopedExternalsRepository = () => ({
  addExternal: jest.fn(),
  getAll: jest.fn(),
  commit: jest.fn()
});
export {
  mockScopedExternalsRepository
};
