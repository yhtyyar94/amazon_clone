import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home banner"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="545673184"
            image="https://m.media-amazon.com/images/I/616dWFinzLL._AC_SL1500_.jpg"
            title="Apple iPhone 13 (128GB) - Midnight"
            price={729.0}
            rating={4}
          />
          <Product
            id="54865418"
            image="https://m.media-amazon.com/images/I/71Xv+VtaRdL._AC_SL1500_.jpg"
            title="Apple Watch Series 7 (GPS, 45mm) - Midnight Aluminium Case with Midnight Sport Band - Regular"
            price={398.0}
            rating={5}
          />
          <Product
            id="54654819"
            image="https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_SL1000_.jpg"
            title="
            Echo Dot (4th generation) | Smart speaker with Alexa | Charcoal"
            price={29.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="851541588"
            image="https://m.media-amazon.com/images/I/91b2QZcHvoS._AC_SL1500_.jpg"
            title="LG 50UP77006LB 50 4K Ultra HD Smart TV"
            price={398}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
