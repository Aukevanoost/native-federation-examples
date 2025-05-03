class NFError extends Error {
  constructor(message) {
    super(message);
    this.name = "NFError";
  }
}
export {
  NFError
};
