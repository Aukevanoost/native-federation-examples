import type { DriversContract } from "lib/2.app/driver-ports/drivers.contract";
import type { DrivingContract } from "lib/2.app/driving-ports/driving.contract";
import type { Config } from "lib/2.app/config/config.contract";
export declare const createDrivers: (config: Config, adapters: DrivingContract) => DriversContract;
