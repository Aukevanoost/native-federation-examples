const useDefaultImportMap = () => ({
  loadModuleFn: (url) => import(url),
  importMapType: "importmap"
});
export {
  useDefaultImportMap
};
