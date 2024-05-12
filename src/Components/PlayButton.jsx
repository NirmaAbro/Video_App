import React, { useState } from "react";

function PlayButton({ children, onPlay, onPause }) {
  const [playing, setplaying] = useState(false);

  const handleclick = () => {
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setplaying(!playing);
  };
  return (
    <div>
      <button
        onClick={handleclick}
        className="bg-blue-600 text-white p-3 w-40 flex-wrap m-3  rounded-xl border-2 border-blackF"
      >
        {children} {playing ? "⏸️" : "▶️"}
      </button>
    </div>
  );
}

export default PlayButton;
