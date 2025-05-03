import type { ForBrowserTasks } from "lib/2.app/driving-ports/for-browser-tasks";
import type { ImportMapConfig } from "lib/2.app/config/import-map.contract";
declare const createBrowser: (config: ImportMapConfig) => ForBrowserTasks;
export { createBrowser };
