import { initFederation } from "./init-federation";
import { NFError } from "./native-federation.error";
export * from "./1.domain";
export * from "./2.app";
import * as config from "./4.config";
import * as SDK from "./sdk.index";
export {
  NFError,
  SDK,
  config,
  initFederation
};
