import { EnvironmentConfig } from "./contracts";

/**
 * Adds a configuration filter parameter to a URL.
 * This filter tells the Piral API to return configuration data.
 * (only possible with config containers)
 *
 * @param url - The base URL to modify
 * @returns URL with the configuration filter added
 */
export function withConfigFilter(url: string): string {
  const divider = url.includes("?") ? "&" : "?";
  return `${url}${divider}selection=config`;
}

/**
 * Fetches environment variables for micro frontends from a Piral feed.
 * The response is expected to contain modules with configuration data.
 *
 * @param url - The Piral API URL to fetch from
 * @returns Promise resolving to a record of remote names to their configurations
 */
export function fetchPiralEnvVariables(
  url: string
): Promise<Record<string, any>> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch Piral environment variables: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      // Transform the modules data into a flat configuration object
      // where each key is a remote name and value is its configuration
      return Object.entries(data.modules || {}).reduce(
        (
          accumulator: Record<string, any>,
          [remoteName, moduleData]: [string, any]
        ) => ({
          ...accumulator,
          [remoteName]: moduleData.config || {},
        }),
        {}
      );
    })
    .catch((error) => {
      console.error("Error fetching Piral environment variables:", error);
      throw error;
    });
}

/**
 * Adds a tag parameter to a URL for testing and deployment purposes.
 * If a tag is specified in the environment configuration, it will be appended
 * to the URL to fetch a specific version or environment of the feed.
 *
 * @param url - The base URL to modify
 * @param env - Environment configuration containing the optional tag
 * @returns URL with the tag parameter added if a tag is configured
 */
export function withTag(url: string, env: EnvironmentConfig): string {
  const divider = url.includes("?") ? "&" : "?";

  // Only add the tag if it exists and is not empty
  return env.tag && env.tag.length > 0
    ? `${url}${divider}tag=${encodeURIComponent(env.tag)}`
    : url;
}
