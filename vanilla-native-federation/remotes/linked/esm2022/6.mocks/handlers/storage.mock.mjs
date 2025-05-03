const createStorageHandlerMock = (storageRef) => jest.fn(
  (key, fallback) => {
    if (!storageRef[key]) storageRef[key] = fallback;
    const mockStorageEntry = {
      get: jest.fn(() => JSON.parse(JSON.stringify(storageRef[key]))),
      set: jest.fn((value) => {
        storageRef[key] = value;
        return mockStorageEntry;
      }),
      clear: jest.fn(() => {
        storageRef[key] = fallback;
        return mockStorageEntry;
      })
    };
    return mockStorageEntry;
  }
);
export {
  createStorageHandlerMock
};
