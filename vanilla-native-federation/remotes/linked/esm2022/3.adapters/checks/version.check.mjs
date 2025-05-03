import semverValid from "semver/functions/valid";
import semverSatisfies from "semver/functions/satisfies";
import semverCompare from "semver/functions/compare";
const createVersionCheck = () => {
  return {
    isValidSemver: function(version) {
      return semverValid(version) !== null;
    },
    isCompatible: function(version, range) {
      return semverSatisfies(version, range);
    },
    compare: function(versionA, versionB) {
      return semverCompare(versionA, versionB, true);
    }
  };
};
export {
  createVersionCheck
};
