const createMockLogHandler = (level = "debug") => ({
  debug: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  level
});
export {
  createMockLogHandler
};
