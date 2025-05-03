import { cloneEntry } from "./clone-entry";
const globalThisStorageEntry = (namespace) => (key, initialValue) => {
  if (!globalThis[namespace]) {
    globalThis[namespace] = {};
  }
  const storage = globalThis[namespace];
  if (!storage[key]) storage[key] = initialValue;
  const entry = {
    get() {
      return cloneEntry(key, storage[key]);
    },
    set(value) {
      storage[key] = cloneEntry(key, value);
      return entry;
    },
    clear() {
      storage[key] = cloneEntry(key, initialValue);
      return this;
    }
  };
  return entry;
};
export {
  globalThisStorageEntry
};
