import ReactPlayer from "react-player";

function SoundWithName(props: { soundname: string; filepath: string }) {
  return (
    <>
      <div>
        <h4>{props.soundname}</h4>
        <ReactPlayer
          className="react-player fixed-bottom"
          url={props.filepath}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </>
  );
}

export default SoundWithName;
