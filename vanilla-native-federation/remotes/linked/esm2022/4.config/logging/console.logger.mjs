const consoleLogger = {
  /* eslint no-console: "off", curly: "error" */
  debug: (msg, err) => console.log(`[DEBUG]: ${msg}`, err),
  error: (msg, err) => console.error(`[NF]: ${msg}`, err),
  warn: (msg, err) => console.warn(`[NF]: ${msg}`, err)
};
export {
  consoleLogger
};
