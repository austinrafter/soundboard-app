import camelCase from "lodash/camelCase";
import {
  capitalizeFirstLetter,
  removeRelativePathFromFilename,
} from "../string-helper";

export function getJsxNameFromRelativePath(relativepath: string): string {
  return getJsxName(removeRelativePathFromFilename(relativepath));
}

function getJsxName(filename: string): string {
  return capitalizeFirstLetter(camelCase(filename));
}
