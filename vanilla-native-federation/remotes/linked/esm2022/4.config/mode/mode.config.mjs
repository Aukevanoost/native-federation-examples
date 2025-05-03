import { defaultProfile } from "./default.profile";
const createModeConfig = (override) => ({
  strict: false,
  profile: defaultProfile,
  ...override
});
export {
  createModeConfig
};
