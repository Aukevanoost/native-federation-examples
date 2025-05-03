const createBrowser = (config) => {
  return {
    setImportMap: function(importMap) {
      document.head.querySelectorAll(`script[type="${config.importMapType}"]`).forEach((importMap2) => importMap2.remove());
      document.head.appendChild(
        Object.assign(document.createElement("script"), {
          type: config.importMapType,
          innerHTML: JSON.stringify(importMap)
        })
      );
      return importMap;
    },
    importModule: function(moduleUrl) {
      return config.loadModuleFn(moduleUrl);
    }
  };
};
export {
  createBrowser
};
