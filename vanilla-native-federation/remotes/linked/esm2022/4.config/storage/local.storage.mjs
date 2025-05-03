const localStorageEntry = (namespace) => (key, initialValue) => {
  if (!localStorage.getItem(`${namespace}.${String(key)}`)) {
    localStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(initialValue));
  }
  const entry = {
    get() {
      const fromCache = localStorage.getItem(`${namespace}.${String(key)}`);
      if (!fromCache) return void 0;
      return JSON.parse(fromCache);
    },
    set(value) {
      localStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(value));
      return entry;
    },
    clear() {
      localStorage.setItem(`${namespace}.${String(key)}`, JSON.stringify(initialValue));
      return this;
    }
  };
  return entry;
};
export {
  localStorageEntry
};
