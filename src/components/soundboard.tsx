import Loading from "src/components/loading.tsx";
import { useEffect, useState } from "react";
import importAssetFilesIntoJsxComponentMap, {
  ComponentWithMetadata,
} from "../util/import_assets_as_react_player_with_name_component";
import isEmpty from "lodash/isEmpty";
import SoundWithName from "./react_player_with_name";

function SoundBoard() {
  /*
  const [assetFiles, setAssetFiles] =
    useState<Record<string, ComponentWithMetadata<JSX.Element>>>();
  const [error, setError] = useState<null>();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    importAssetFilesIntoJsxComponentMap().then(setAssetFiles).catch(setError);
  }, []);

  // Here's some code which allows the website to support scrolling to the scroll query param

  if (isEmpty(assetFiles)) {
    return (
      <SoundWithName
        soundname="Files not properly loading"
        filepath="src/assets/trailer park boys/notDoingWellInThinkinDepartment.mp3"
      />
    );
  }

   */

  return (
    <>
      <div>
        <table>
          <tr>
            <th>Trailer Park Boys </th>
          </tr>
          <tr>
            <td>
              <SoundWithName
                soundname={"Not Doing Well In Thinkin Department"}
                filepath={
                  "src/assets/trailer park boys/notDoingWellInThinkinDepartment.mp3"
                }
              />

            </td>
            <td><SoundWithName
                soundname={"Not Doing Well In Thinkin Department"}
                filepath={
                  "src/assets/trailer park boys/notDoingWellInThinkinDepartment.mp3"
                }
            />
              </td>
          </tr>
        </table>
<div></div>
        <table>
          <tr>
            <th>Trailer Park Boys </th>
          </tr>
          <tr>
            <td>
              <SoundWithName
                  soundname={"Not Doing Well In Thinkin Department"}
                  filepath={
                    "src/assets/trailer park boys/notDoingWellInThinkinDepartment.mp3"
                  }
              />

            </td>
            <td><SoundWithName
                soundname={"Not Doing Well In Thinkin Department"}
                filepath={
                  "src/assets/trailer park boys/notDoingWellInThinkinDepartment.mp3"
                }
            />
              </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default SoundBoard;
