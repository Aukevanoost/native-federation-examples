const createCommitChanges = (ports) => {
  function addToBrowser(importMap) {
    ports.browser.setImportMap(importMap);
    return importMap;
  }
  function persistRepositoryChanges() {
    ports.remoteInfoRepo.commit();
    ports.scopedExternalsRepo.commit();
    ports.sharedExternalsRepo.commit();
    return;
  }
  return (importMap) => Promise.resolve(importMap).then(addToBrowser).then(persistRepositoryChanges);
};
export {
  createCommitChanges
};
