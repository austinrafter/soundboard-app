import { Component } from "react";
import { getJsxNameFromRelativePath } from "./name/get-jsx-name";
import SoundWithName from "../components/react_player_with_name";

async function waitForImportToResolveAndExtractDefaultExport([
  fileName,
  importPromise,
]: [string, () => Promise<{ default: JSX.Element }>]): Promise<
  [string, JSX.Element]
> {
  const jsxName: string = getJsxNameFromRelativePath(fileName);
  const theJsxComponent = (
    <SoundWithName soundname={jsxName} filepath={fileName} />
  );

  return [jsxName, theJsxComponent];
}

export type ComponentWithMetadata<U> = U & { meta: { title: string } };
function addMetaDataToComponentMap<ComponentType extends JSX.Element>(
  componentMap: Record<string, ComponentType>
): ComponentWithMetadata<ComponentType> {
  return Object.entries(componentMap).reduce(
    (
      acc,
      [key, value]: [string, ComponentType]
    ): ComponentWithMetadata<ComponentType> => {
      const newValue = value;
      console.log(newValue);
      (newValue as ComponentWithMetadata<ComponentType>).meta = { title: key };
      return {
        ...acc,
        [key]: newValue,
      };
    },
    {} as ComponentWithMetadata<ComponentType>
  );
}

async function importAssetFilesAndTransformThemIntoJsxComponentsScript(
  resolve: (something: ComponentWithMetadata<JSX.Element>) => void,
  reject: (error: any) => void
) {
  try {
    const rawImportsFromAssetFiles: Record<
      string,
      () => Promise<{ default: JSX.Element }>
    > = import.meta.glob("../assets/*.mp3") as Record<
      string,
      () => Promise<{ default: JSX.Element }>
    >;

    const jsxNameToJsxComponentPairsPromises: Promise<[string, JSX.Element]>[] =
      Object.entries({ ...rawImportsFromAssetFiles }).map(
        waitForImportToResolveAndExtractDefaultExport
      );

    //rconsole.log(jsxNameToJsxComponentPairsPromises);

    const jsxNameToJsxComponentPairs: [string, JSX.Element][] =
      await Promise.all(jsxNameToJsxComponentPairsPromises);

    const combinedComponentMap = {
      ...Object.fromEntries(jsxNameToJsxComponentPairs),
    };

    console.log(combinedComponentMap);

    const componentsWithMetaData =
      addMetaDataToComponentMap(combinedComponentMap);

    resolve(componentsWithMetaData);
  } catch (error) {
    console.log("getting error");
    reject(error);
  }
}

export default async function importAssetFilesIntoJsxComponentMap(): Promise<
  ComponentWithMetadata<JSX.Element>
> {
  return new Promise(
    importAssetFilesAndTransformThemIntoJsxComponentsScript
  ) as Promise<ComponentWithMetadata<JSX.Element>>;
}
