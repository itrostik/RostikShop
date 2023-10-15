import React from "react";
import triangle from "../img/sort-triangle.svg";

const Sort = ({ sortType, setSortType }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const body = document.body;

  body.addEventListener("click", () => {
    setOpenModal(false);
  });

  function closeModal(event) {
    event.stopPropagation();
    setOpenModal(!openModal);
  }

  const typeSort = [
    { name: "рейтингу", sortProperty: "rating" },
    { name: "возрастанию цены", sortProperty: "price" },
    { name: "убыванию цены", sortProperty: "price&order=desc" },
  ];

  return (
    <div className="sort">
      <img
        src={triangle}
        alt="triangle"
        className={openModal ? "sort-image" : "sort-image rotate-image"}
      />
      <div className="sort-text">Сортировка по:</div>
      <span className="sort-by" onClick={(event) => closeModal(event)}>
        {sortType.name}
      </span>
      {openModal ? (
        <div className="sort-modal sort-modal">
          <ul className="sort-modal__list">
            {typeSort.map((el) => (
              <li
                className={
                  sortType.name === el.name
                    ? "sort-modal__item active-item"
                    : "sort-modal__item"
                }
                onClick={() => setSortType(el)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sort;
