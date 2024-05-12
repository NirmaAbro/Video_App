import React from "react";

function Products({ id, title, views, channel, time, verified ,children}) {
  return (
    <div>
      <div>{id}</div>
      <div className={title === "MongoDB Mastery" ? "bg-green-500" : ""}>{title}</div>
      <div className={views === 3 ? "very less view bg-yellow-300" : ""}>{views}</div>

      <div>{channel}</div>
      <div>{time}</div>
      <div className={verified ? "bg-slate-400" : ""}>
        {verified ? "true" : "false"}
      </div>
      <div>{children}</div>
    
    </div>
    
  );
}

export default Products;

// lectur 4 
