const sessionStorageEntry = (namespace) => (key, initialValue) => {
  if (!sessionStorage.getItem(`${namespace}.${String(key)}`)) {
    sessionStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(initialValue));
  }
  const entry = {
    get() {
      const fromCache = sessionStorage.getItem(`${namespace}.${String(key)}`);
      if (!fromCache) return void 0;
      return JSON.parse(fromCache);
    },
    set(value) {
      sessionStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(value));
      return entry;
    },
    clear() {
      sessionStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(initialValue));
      return this;
    }
  };
  return entry;
};
export {
  sessionStorageEntry
};
