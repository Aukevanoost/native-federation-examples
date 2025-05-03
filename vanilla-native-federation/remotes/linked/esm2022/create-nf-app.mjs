import { createConfigHandlers } from "./5.di/config.factory";
import { createDrivers } from "./5.di/drivers.factory";
import { createDriving } from "./5.di/driving.factory";
const CREATE_NF_APP = (options) => {
  const config = createConfigHandlers(options);
  const adapters = createDriving(config);
  const app = createDrivers(config, adapters);
  return {
    app,
    adapters,
    config
  };
};
export {
  CREATE_NF_APP
};
