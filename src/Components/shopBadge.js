import React from "react";
export default ({ number= 0, theme="dark" }) => {
  return (
    <span>
      <img className="icon" src={`Icon/icons-bag${theme==="white"?"-white":""}.png`} alt="" />
      <b className={`badge badge-${theme==="white"?"white":"red"} badge-price`}>{number}</b>
    </span>
  );
};
