import type { Config, Options } from "./2.app/config/config.contract";
import type { DriversContract } from "./2.app/driver-ports/drivers.contract";
import type { DrivingContract } from "./2.app/driving-ports/driving.contract";
export type NF_APP = {
    app: DriversContract;
    adapters: DrivingContract;
    config: Config;
};
export declare const CREATE_NF_APP: (options: Options) => NF_APP;
