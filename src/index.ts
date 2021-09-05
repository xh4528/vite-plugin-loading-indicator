import { PluginOptions } from "./types";
import { insertLoadingContent, resolveLoadingPath } from "./utils";

export default function loadingIndicator(pluginOptions: PluginOptions) {
  const virtualFileId = "vite-plugin-loading-indicator";
  return {
    name: virtualFileId,

    transformIndexHtml(html) {
      //init options
      pluginOptions.name ??= "circle";
      pluginOptions.color ??= "black";
      pluginOptions.background ??= "white";
      pluginOptions.mountId ??= "app";
      pluginOptions.mountId.startsWith("#") &&
        (pluginOptions.mountId = pluginOptions.mountId.substr(1));
      pluginOptions.pluginName = virtualFileId;

      const loadingPath: string = resolveLoadingPath(pluginOptions);

      if (loadingPath)
        return insertLoadingContent(html, loadingPath, pluginOptions);
    },
  };
}
