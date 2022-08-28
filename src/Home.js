import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />
        {/*58:29*/}
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMIx Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61rt7lK+UTL._SY355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49038500"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71nplbAMwzL._SX425_.jpg"
          />
          <Product
            id="23445930"
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SX425_.jpg"
          />
          <Product
            id="3254354345"
            title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Silver (3rd Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81MF389-9gS._SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 24-inch (59.8 cm) Curved Gaming Monitor- Full HD, AMD Free Sync, 144 Hz Refresh Rate- LC24RG50FQWXXL"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71dGb+7qhQL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
