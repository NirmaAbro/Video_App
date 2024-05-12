import React from "react";
// ya srf UI ka part ha yaha srf UI bnyga

function Videos({ id, title, channel, time, verified, views, children }) {
  return (
    <div className="m-auto">
      <div className="">
        <div className="flex p-4 border-3 border-black rounded-2xl">
          <img
            src={`https://picsum.photos/200/300`}
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8TuW9LRbPMOwmbR7SShbi3gSGCT5j0Ga_Q&sF"
            alt=""
            className="w-30 h-30 border-2 border-blackrounderd-lg shadow-lg shadow-black"
          />
        </div>
        <div>{title}</div>
        <div>
          {channel} {verified && ""}
        </div>
        <div>{views}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Videos;
