import React, { useEffect } from "react";

const initialValue = {
  id: 0,
  title: "",
  channel: "node Lecture",
  view: "",
  time: "1 year ago",
  verified: true,
};
const AddVideo = ({ addVideo, editableVideo, updateVideo }) => {
  const [video, setVideo] = React.useState(initialValue);

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
    // console.log(video);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video)
    }else{
      addVideo(video)
    }
 
    setVideo(initialValue);
  }


  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo)
    }
  },[editableVideo])
  return (
    <form>
      <input
        type="text"
        name="title"
        value={video.title}
        placeholder="Enter Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="view"
        value={video.view}
        placeholder="Enter Views "
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>{editableVideo ? "Edit Video" : "Add Video"} </button>
    </form>
  );
};

export default AddVideo;