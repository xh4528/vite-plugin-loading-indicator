import {
  InsertLoadingContent,
  LOADING_NAME,
  MultiReplace,
  ResolveLoadingPath,
} from "./types";
import { resolve } from "path";
import { gray, redBright } from "chalk";
import { existsSync, readFileSync } from "fs-extra";

export const resolveLoadingPath: ResolveLoadingPath = (options) => {
  let loadingPath: string = "";
  if (options.name) {
    if (LOADING_NAME.includes(options.name)) {
      loadingPath = resolve(__dirname, `./loading/${options.name}.html`);
    } else {
      //user custom loading indicator path
      const customPath = resolve(process.cwd(), options.name);
      if (existsSync(customPath)) loadingPath = customPath;
    }
  }

  if (!existsSync(loadingPath)) {
    console.log(
      `\n${gray(`[${options.pluginName}] `)}${redBright(
        `${options.name} not found`
      )}`
    );
  }

  return loadingPath;
};

export const insertLoadingContent: InsertLoadingContent = (
  sourceValue,
  loadingPath,
  options
) => {
  try {
    //read file
    let loadingIndicator: string = readFileSync(loadingPath).toString();

    //modify options in loading indicator
    loadingIndicator = multiReplace(
      loadingIndicator,
      [
        "<%= options.mountId %>",
        "<%= options.background %>",
        "<%= options.color %>",
      ],
      [options.mountId, options.background, options.color]
    );

    //insert loading indicator in to vue mount point
    sourceValue = sourceValue.replace(
      `<div id="${options.mountId}"></div>`,
      `<div id="${options.mountId}">` + loadingIndicator + "</div>"
    );
    return sourceValue;
  } catch (error) {
    console.log(
      `\n${gray(`[${options.pluginName}] `)}${redBright(`${error}`)}`
    );
    return sourceValue;
  }
};

export const multiReplace: MultiReplace = (
  sourceValue,
  searchValue,
  replaceValue
) => {
  let result: string = sourceValue;
  if (Array.isArray(searchValue)) {
    searchValue.map(
      (search: string | RegExp, index: number) =>
        (result = result.replace(search, replaceValue[index]) as string)
    );
  } else {
    result = sourceValue.replace(searchValue, replaceValue.toString());
  }
  return result;
};
