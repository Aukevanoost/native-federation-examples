import type { ImportMapConfig } from "lib/2.app/config/import-map.contract";
declare const useShimImportMap: (cfg?: {
    shimMode: boolean;
}) => ImportMapConfig;
export { useShimImportMap };
