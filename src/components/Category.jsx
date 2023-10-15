import React from "react";
import "../scss/main.scss";

const Category = ({ category, setCategory, title, indexCategory }) => {
  return (
    <div
      className={
        category === indexCategory ? "category active__category" : "category"
      }
      onClick={() => setCategory(indexCategory)}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Category;
