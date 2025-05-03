import type { StorageEntryKey } from "lib/2.app/config/storage.contract";
type CloneEntry = <T>(name: StorageEntryKey, raw: T) => T;
declare const cloneEntry: CloneEntry;
export { CloneEntry, cloneEntry };
