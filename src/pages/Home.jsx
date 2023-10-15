import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import Product from "../components/Product";
import "../scss/main.scss";

const Home = ({
  count,
  setCount,
  gender,
  currentPrice,
  setCurrentPrice,
  cart,
  setCart,
}) => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [category, setCategory] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "рейтингу",
    sortProperty: "rating",
  });

  const typeSort = [
    { name: "рейтингу", sortProperty: "rating" },
    { name: "возрастанию цены", sortProperty: "price&order=asc" },
    { name: "убыванию цены", sortProperty: "price" },
  ];

  React.useEffect(() => {
    setLoading(true);
    async function getProducts() {
      const response = await axios.get(
        `https://650f457c54d18aabfe99fade.mockapi.io/api/shop/products?sortBy=${
          typeSort.filter((el) => el.name === sortType.name)[0].sortProperty
        }&order=desc&${gender !== null ? `&gender=${gender}` : ""}`,
      );

      setProducts(response.data);
      setLoading(false);
    }
    getProducts();
    // eslint-disable-next-line
  }, [gender, category, sortType]);
  return (
    <>
      <div className="sorts-category">
        <Categories category={category} setCategory={setCategory} />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h1 className="main__title">Весь ассортимент</h1>
      <div className="products">
        {loading
          ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
          : // eslint-disable-next-line
            products.map((product, id) => {
              if (category === 0)
                return (
                  <Product
                    key={id}
                    product={product}
                    count={count}
                    setCount={setCount}
                    currentPrice={currentPrice}
                    setCurrentPrice={setCurrentPrice}
                    cart={cart}
                    setCart={setCart}
                  />
                );
              else {
                if (category === product.category) {
                  return (
                    <Product
                      key={id}
                      product={product}
                      count={count}
                      setCount={setCount}
                      currentPrice={currentPrice}
                      setCurrentPrice={setCurrentPrice}
                      cart={cart}
                      setCart={setCart}
                    />
                  );
                }
              }
            })}
      </div>
    </>
  );
};

export default Home;
