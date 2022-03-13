import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import axios from "axios";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const handleSearch = () => {
    dispatch({
      type: "REMOVE_ALL",
    });
    navigate("/searchResults");
    axios
      .get(
        `https://amazon-backend-clone2.herokuapp.com/amazon/search?title=${search}`,
        {
          headers: {
            "Access-Control-Allow-Headers": "*",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "ADD_ALL",
          items: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const searchDiv = document.getElementById("header__search");
    window.addEventListener("mousedown", (e) => {
      if (
        (e.target.id && e.target.id === "header__search") ||
        e.target.parentElement.id === "header__search"
      ) {
        searchDiv.classList.add("header_searchDiv_outline");
      } else {
        searchDiv.classList.remove("header_searchDiv_outline");
      }
    });

    console.log(window.location);
  }, []);

  return (
    <div className="header">
      <Link to={"/"}>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header__search" id="header__search">
        <input
          className="header__searchInput"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon className="header__searchIcon" onClick={handleSearch} />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
