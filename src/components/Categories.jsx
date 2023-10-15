import React from "react";
import Category from "./Category";
import "../scss/main.scss";

const Categories = ({ category, setCategory }) => {
  const categories = [
    "Все",
    "Куртки",
    "Футболки",
    "Штаны",
    "Худи",
    "Кроссовки",
  ];
  return (
    <div className="categories">
      {categories.map((el, index) => {
        return (
          <Category
            category={category}
            setCategory={setCategory}
            title={categories[index]}
            indexCategory={index}
          />
        );
      })}
    </div>
  );
};

export default Categories;
