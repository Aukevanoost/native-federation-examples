const useSystemJSImportMap = () => ({
  importMapType: "systemjs-importmap",
  // @ts-ignore
  loadModuleFn: (url) => window.System.import(url)
});
export {
  useSystemJSImportMap
};
