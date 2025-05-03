import { NFError } from "lib/native-federation.error";
const cloneEntry = (name, raw) => {
  try {
    if (typeof globalThis.structuredClone === "function") {
      return globalThis.structuredClone(raw);
    }
  } catch {
  }
  try {
    return JSON.parse(JSON.stringify(raw));
  } catch {
  }
  throw new NFError(`Could not parse storage entry '${String(name)}'`);
};
export {
  cloneEntry
};
