export interface PluginOptions {
  /**
   * default:"circle"
   * "circle",
   * "cube-grid",
   * "fading-circle",
   * "folding-cube",
   * "chasing-dots",
   * "pulse",
   * "rectangle-bounce",
   * "rotating-plane",
   * "three-bounce",
   * "wandering-cubes",
   */
  name?: string;

  /**
   * default:"black"
   */
  color?: string;

  /**
   * default:"white"
   */
  background?: string;

  /**
   * default:#app
   */
  mountId?: string;

  [any: string]: any;
}

export interface MultiReplace {
  (
    sourceValue: string,
    searchValue: string | RegExp | string[] | RegExp[],
    replaceValue: string | string[]
  ): string;
}

export interface ResolveLoadingPath {
  (options: PluginOptions): string;
}

export interface InsertLoadingContent {
  (sourceValue: string, loadingPath: string, options: PluginOptions): string;
}

export const LOADING_NAME = [
  "circle",
  "cube-grid",
  "fading-circle",
  "folding-cube",
  "chasing-dots",
  "pulse",
  "rectangle-bounce",
  "rotating-plane",
  "three-bounce",
  "wandering-cubes",
];
