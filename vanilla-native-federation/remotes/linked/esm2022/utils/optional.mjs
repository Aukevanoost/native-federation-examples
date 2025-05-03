class Optional {
  constructor(item) {
    this.item = item;
  }
  static of(item) {
    return new Optional(item);
  }
  static empty() {
    return Optional.of(void 0);
  }
  isPresent() {
    return typeof this.item !== "undefined" && this.item !== null;
  }
  set(other) {
    return Optional.of(other);
  }
  ifPresent(callback) {
    if (this.isPresent()) callback(this.item);
  }
  map(callback) {
    if (!this.isPresent()) return Optional.empty();
    const result = callback(this.item);
    return result instanceof Optional ? result : Optional.of(result);
  }
  orElse(other) {
    return this.isPresent() ? this.item : other;
  }
  orThrow(error) {
    if (this.isPresent()) return this.item;
    throw typeof error === "string" ? new Error(error) : error;
  }
  get() {
    return this.item;
  }
}
export {
  Optional
};
