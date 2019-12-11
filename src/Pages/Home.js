import React from "react";
import Header from "../Containers/Header";
import Footer from "../Containers/Footer";
import MenuTop from "../Containers/MenuTop";
import Filters from "../Containers/Filters";
import CardItem from "../Components/Card";
import Button from "../Components/Button";
import Input from "../Components/Input";
import "../Styles/App.css";

export default () => {
  return (
    <div>
      <Header />
      <MenuTop />
      <section className="container top">
        <div className="row">
          <h1>Mens Wear</h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h3>Accessoires</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
          </div>
          <div className="col-lg-4">
            <h3>Accessoires</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
          </div>
          <div className="col-lg-4">
            <h3>Accessoires</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
            <h3>ASOS basic tops</h3>
          </div>
        </div>
      </section>

      <section className="container row">
        <div className="col-lg-3">
          <Filters />
        </div>
        <div className="col-lg-3">
          <CardItem
            title="Men's shirt offer"
            picture="Images/images-shirt17.png"
          />
        </div>
        <div className="col-lg-3">
          <CardItem
            title="Men's shirt offer 2 "
            price={343}
            colors={[
              { label: null, theme: "red", name: "shirtColor16" },
              { label: null, theme: "blue", name: "shirtColor16" }
            ]}
            picture="Images/images-shirt16.png"
          />
        </div>
        <div className="col-lg-3">
          <CardItem
            title="Men's shirt offer 2 "
            priceFrom={343}
            picture="Images/images-shirt14.png"
          />
        </div>
        <div className="col-lg-3">
          <CardItem
            title="Men's shirt offer 2 "
            priceFix={343}
            hot
            picture="Images/images-shirt14.png"
          />
        </div>
        <div className="col-lg-3">
          <CardItem
            title="Men's shirt offer 2 "
            picture="Images/images-shirt14.png"
          />
        </div>
        <div className="col-lg-3">
          <CardItem
            title="Men's shirt offer 2 "
            price={343}
            colors={[
              { label: "red", theme: "red", name: "colorSHirt.6" },
              { label: "blue", theme: "blue", name: "colorSHirt.6" },
              { label: "purple", theme: "purple", name: "colorSHirt.6" }
            ]}
            picture="Images/images-shirt6.png"
          />
        </div>
      </section>
      <section className="row">
        <div className="col-lg-4">
          <CardItem
            title="Men's shirt offer 2 "
            priceFix={343}
            picture="Images/images-shirt7.png"
            hot
          />
        </div>
        <div className="col-lg-4">
          <CardItem
            title="Men's shirt offer 2 "
            priceFix={343}
            colors={[
              { label: null, theme: "red", name: "colorShirt8" },
              { label: null, theme: "blue", name: "colorShirt8" },
              { label: null, theme: "purple", name: "colorShirt8" }
            ]}
            picture="Images/images-shirt8.png"
            custom
          />
        </div>
        <div className="col-lg-4">
          <CardItem
            title="Men's shirt offer 2 "
            price={343}
            colors={[
              { label: null, theme: "red", name: "shirt9Color" },
              { label: null, theme: "blue", name: "shirt9Color" },
              { label: null, theme: "purple", name: "shirt9Color" }
            ]}
            picture="Images/images-shirt9.png"
          />
        </div>
      </section>

      <section className="row footerCover">
        <h1 className="serif">Converse</h1>
        <h2>Explore the styles tough enough to handle all your workouts</h2>
        <Button label="Shop brand" white />
      </section>

      <section className="row margin-top subscribe">
        <div className="col-lg-7">
          <span className="">
            SUBSCRIBE FO SHOP NEWS , UPDARES AND SPECIAL OFFERS
          </span>
        </div>
        <Input
        theme="white"
        placeholder="Your email here"
        iconSrc="Icon/icons-email-black.png"
        widthCol={3}
      />
        <div className="col-lg-2">
          <Button style={{marginLeft:10}} label="Subscribe" />
        </div>
        
      </section>
      <Footer />
    </div>
  );
};
