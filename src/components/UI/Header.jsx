import React from "react";
import logo from "../../../src/img/rs.svg";
import cart from "../../../src/img/shopping-cart.svg";
import "../../scss/main.scss";
import { Link } from "react-router-dom";
const Header = ({ count, currentPrice, gender, setGender }) => {
  const [hoveredMale, setHoveredMale] = React.useState(false);
  const [hoveredFemale, setHoveredFemale] = React.useState(false);
  const genderRefFemale = React.createRef();
  const genderRefMale = React.createRef();

  return (
    <div className="header __container">
      <Link to={"/"} className="header__image">
        <img src={logo} alt="logo" />
      </Link>
      <div className="header__title">
        <Link to={"/"} className="header__title-head">
          Rostik SHOP
        </Link>
        <Link to={"/"} className="header__title-text">
          лучшая одежда здесь
        </Link>
      </div>
      <div className="header__gender">
        <div
          ref={genderRefMale}
          onMouseEnter={() => setHoveredMale(true)}
          onClick={() => setGender("мужской")}
        >
          <span
            className={
              gender !== "мужской"
                ? "header__gender-text"
                : "header__gender-text header__gender-blockActive-text"
            }
          >
            Мужское
          </span>
          <span
            className={
              hoveredMale
                ? gender !== "мужской"
                  ? "header__gender-line hovered-line"
                  : "header__gender-line hovered-line header__gender-blockActive-line"
                : "header__gender-line"
            }
          ></span>
        </div>
        <span>|</span>
        <div
          ref={genderRefFemale}
          onMouseEnter={() => setHoveredFemale(true)}
          onClick={() => setGender("женский")}
        >
          <span
            className={
              gender !== "женский"
                ? "header__gender-text"
                : "header__gender-text header__gender-blockActive-text"
            }
          >
            Женское
          </span>
          <span
            className={
              hoveredFemale
                ? gender !== "женский"
                  ? "header__gender-line hovered-line"
                  : "header__gender-line hovered-line header__gender-blockActive-line"
                : "header__gender-line"
            }
          ></span>
        </div>
      </div>
      <Link to="/cart" className="header__info">
        <div className="header__info-price">{currentPrice} ₽</div>
        <div>|</div>
        <div className="header__info-cart">
          <img src={cart} alt="cart" />
          {count !== 0 ? <div>{count}</div> : ""}
        </div>
      </Link>
    </div>
  );
};

export default Header;
