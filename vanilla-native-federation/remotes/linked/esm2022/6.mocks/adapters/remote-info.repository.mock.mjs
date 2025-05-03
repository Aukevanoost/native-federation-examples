const mockRemoteInfoRepository = () => ({
  contains: jest.fn(),
  addOrUpdate: jest.fn(),
  tryGetModule: jest.fn(),
  getAll: jest.fn(),
  commit: jest.fn()
});
export {
  mockRemoteInfoRepository
};
