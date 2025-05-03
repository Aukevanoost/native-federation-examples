const createHostConfig = (override) => {
  if (typeof override.hostRemoteEntry === "string") {
    return {
      hostRemoteEntry: {
        name: "__NF-HOST__",
        url: override.hostRemoteEntry
      }
    };
  }
  if (!!override.hostRemoteEntry?.url) {
    return {
      hostRemoteEntry: {
        name: "__NF-HOST__",
        ...override.hostRemoteEntry
      }
    };
  }
  return { hostRemoteEntry: false };
};
export {
  createHostConfig
};
