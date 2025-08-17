import { LoadRemoteModule } from "vanilla-native-federation";

export interface BootstrapModule {
  /**
   * Bootstrap function called when the micro frontend is loaded.
   * Allows remotes to load sub-remotes as well.
   *
   * @param loadRemoteModule - Function to load other remote modules
   * @param config - Configuration object specific to this micro frontend
   * @returns Promise or value indicating successful bootstrap
   */
  bootstrap: (
    loadRemoteModule: LoadRemoteModule,
    config: Record<string, any>
  ) => unknown;
}

/**
 * Configuration interface for the micro frontend environment.
 * This configuration can be cached and used to customize behavior.
 */
export interface EnvironmentConfig {
  production?: boolean;

  /** The url of the current domain (host/shell) */
  domain?: string;

  /** Base URL for micro frontends, From here assets can be loaded */
  scopeUrl?: string;

  /** Tag used for version or environment specific remotes */
  tag?: string;

  /** Whether to flush/clear the cache before initialization */
  flush_cache?: boolean;
}
