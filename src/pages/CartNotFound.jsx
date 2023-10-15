import React from "react";
import notFound from "../img/cart-notfound.svg";
import { Link } from "react-router-dom";
const CartNotFound = () => {
  return (
    <div className={"notFound"}>
      <div className={"notFound__title"}>Корзина пустая 😕</div>
      <div className={"notFound__text"}>
        Вероятней всего, Вы не ничего не положили сюда. Для того, чтобы купить
        одежду, перейдите на главную страницу.
      </div>
      <div className={"notFound__image"}>
        <img src={notFound} alt="" />
      </div>
      <Link to={"/"} className={"notFound__back"}>
        Вернуться назад
      </Link>
    </div>
  );
};

export default CartNotFound;
