import { type LogType, type LogHandler, type Logger } from "lib/2.app/config/log.contract";
declare const createLogHandler: (logger: Logger, logLevel: LogType) => LogHandler;
export { createLogHandler };
