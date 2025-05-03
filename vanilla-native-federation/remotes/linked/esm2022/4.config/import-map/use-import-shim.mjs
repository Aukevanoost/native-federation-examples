const useShimImportMap = (cfg = { shimMode: false }) => ({
  importMapType: cfg.shimMode ? "importmap-shim" : "importmap",
  loadModuleFn: (url) => importShim(url)
});
export {
  useShimImportMap
};
