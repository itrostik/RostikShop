import React from "react";

const Product = ({
  product,
  count,
  setCount,
  currentPrice,
  setCurrentPrice,
  cart,
  setCart,
}) => {
  const [activeSize, setActiveSize] = React.useState("");
  let [currentCount, setCurrentCount] = React.useState(0);
  const sizes = new Array(product.sizes.length);
  for (let i = 0; i < sizes.length; i++) {
    sizes[i] = 0;
  }
  function addProduct() {
    const index = product.sizes.indexOf(activeSize);
    ++sizes[index];
    setCount(++count);
    setCurrentPrice(currentPrice + product.price);
    setCurrentCount(++currentCount);
    let isAdd = false;
    // eslint-disable-next-line
    cart.map((el) => {
      if (el.name === product.name) {
        if (el.size === activeSize) {
          el.count = el.count + 1;
          isAdd = true;
        } else {
        }
      }
    });
    if (!isAdd) {
      const currentProduct = {
        ...product,
        size: activeSize,
        count: sizes[index],
      };

      cart.push(currentProduct);
    }
    setCart(cart);
  }
  return (
    <div className="product">
      <img
        src={product.imageUrl}
        width={300}
        alt={"52"}
        className="product__image"
      ></img>
      <h1 className="product__name">{product.name}</h1>
      <div className="product__sizes">
        {product.sizes.map((el) => (
          <div
            className={
              activeSize === el ? "product__size active-size" : "product__size"
            }
            onClick={() => setActiveSize(el)}
          >
            {el}
          </div>
        ))}
      </div>
      <div className="product__info">
        <div className="product__price">{product.price + "₽"}</div>
        <div
          className={
            activeSize !== ""
              ? "product__add product__addActive"
              : "product__add"
          }
          onClick={activeSize !== "" ? () => addProduct() : () => {}}
        >
          <div className="product__add-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#959595"
              />
            </svg>
          </div>
          <div className="product__add-text">Добавить</div>

          {currentCount !== 0 ? (
            <span className="product__add-count">{currentCount}</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
