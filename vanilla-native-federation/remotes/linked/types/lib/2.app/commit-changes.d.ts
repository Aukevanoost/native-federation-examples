import type { DrivingContract } from "./driving-ports/driving.contract";
import type { ForCommittingChanges } from "./driver-ports/for-committing-changes.port";
/**
 * Step 5: Commit all changes
 *
 * The changes made to the storage/cache are persisted to storage, and the importmap is
 * inserted into the HTML DOM.
 *
 * This step only runs if all previous steps were succesful to prevent the persistence of
 * erroneous changes into storage which can corrupt other pages/routes of the host.
 *
 * @param adapters
 */
declare const createCommitChanges: (ports: Pick<DrivingContract, "remoteInfoRepo" | "scopedExternalsRepo" | "sharedExternalsRepo" | "browser">) => ForCommittingChanges;
export { createCommitChanges };
