import type { Options } from "./2.app/config/config.contract";
declare const initFederation: (remotesOrManifestUrl?: string | Record<string, string>, options?: Options) => Promise<{
    loadRemoteModule: import("./1.domain").LoadRemoteModule;
    config: import("./2.app/config/config.contract").Config;
}>;
export { initFederation };
