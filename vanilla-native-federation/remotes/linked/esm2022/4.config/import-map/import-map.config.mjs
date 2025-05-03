import { useDefaultImportMap } from "./use-default";
const createImportMapConfig = (override) => ({
  ...useDefaultImportMap(),
  ...override
});
export {
  createImportMapConfig
};
