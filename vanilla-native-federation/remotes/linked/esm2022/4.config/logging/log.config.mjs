import { noopLogger } from "./noop.logger";
import { createLogHandler } from "./log.handler";
const createLogConfig = ({ logger, logLevel }) => ({
  log: createLogHandler(logger ?? noopLogger, logLevel ?? "error")
});
export {
  createLogConfig
};
