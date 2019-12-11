import React from "react";
import InputSearch from "../Components/searchInput";
import ShopBadge from "../Components/shopBadge"

export default () => {
  const handleSearch = value => {
    console.log("search ", value);
  };
  return (
    <div className="menuTop row">
      <div className="col-lg-7">
        <a className="red h1" href="#">
          SHOPMATE
        </a>
        <span className="menu-items">
          <b style={{ marginRight: "15pt", color: "white" }}>Women</b>
          <b style={{ marginRight: "15pt", color: "white" }}>Men </b>
          <b style={{ marginRight: "15pt", color: "white" }}>Kids</b>
          <b style={{ marginRight: "15pt", color: "white" }}>Shoes</b>
          <b style={{ marginRight: "15pt", color: "white" }}>Brands</b>
        </span>
      </div>
      <InputSearch onSearch={handleSearch} />
      <div className="col-lg-1" style={{ marginTop: "4pt" }}>
      <ShopBadge theme="white" number= {6} />
      </div>
    </div>
  );
};
