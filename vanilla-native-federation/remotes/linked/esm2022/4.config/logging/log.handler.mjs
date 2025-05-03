import { LogLevel } from "lib/2.app/config/log.contract";
const createLogHandler = (logger, logLevel) => {
  const logTypes = Object.keys(LogLevel).filter((key) => isNaN(Number(key)));
  return logTypes.reduce((acc, logMessageType) => {
    return {
      ...acc,
      [logMessageType]: (message, details) => {
        if (LogLevel[logMessageType] >= LogLevel[logLevel]) {
          logger[logMessageType](message, details);
        }
      }
    };
  }, { level: logLevel });
};
export {
  createLogHandler
};
