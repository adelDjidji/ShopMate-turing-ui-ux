import React from "react";
import Button from "./Button";
import RadioGroup from "./RadioGroup";
import "./styles/card.css";
// import heartIcon from "Icon/icons-heart-red.png"

export default ({
  title,
  picture,
  price,
  priceFrom,
  priceFix,
  hot,
  colors,
  custom
}) => {
  const handleClick = () => {
    console.log("buy");
  };

  const defaultTop = (
    <div className="card-up">
      <img title="add to favorite" src="Icon/icons-heart-red.png" alt="" />
      <Button onClick={handleClick} label="Quick view" />
    </div>
  );
  const CustomTop = (
    <div className="card-up custom">
      <h3>{title}</h3>
      <p className="priceFix">£{priceFix}</p>
      {colors && <RadioGroup options={colors} defaultValue={colors[0].theme} />}
      <div className="btns">
        <Button onClick={handleClick} label="Quick view" />
        <Button onClick={handleClick} label="Quick view" />
      </div>
      <div>
        <img title="add to favorite" src="Icon/icons-heart-red.png" alt="" />
        Add to Wish list
      </div>
    </div>
  );

  return (
    <div className="card-item">
      {custom ? CustomTop : defaultTop}
      {hot && <span className="hot-tag">HOT</span>}

      {priceFrom && <span className="h3">{title}</span>}

      <img className={!priceFrom && "space-img"} src={picture} alt="" />

      {!priceFrom && <h3>{title}</h3>}

      {price && <p className="price">£{price}</p>}
      {priceFrom && <p className="priceFrom">From £{priceFrom}</p>}
      {priceFix && <p className="priceFix">£{priceFix}</p>}

      {colors && (
        <RadioGroup
          options={colors}
          onChange={() => {}}
          defaultValue={colors[0].theme}
        />
      )}

      {!price && !priceFrom && !priceFix && !colors && (
        <div>
          <Button onClick={handleClick} label="Buy now" />
        </div>
      )}
    </div>
  );
};
