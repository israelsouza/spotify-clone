import React, { use } from "react";
import SingleItem from "./SingleItem";
import "../assets/css/item_list.css";

import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // forma mais eficiente
  const finalItems = isHome ? items : Infinity;

  // menos eficiente
  // let finalItems;
  // isHome ? (finalItems = items) : (finalItems = Infinity);

  return (
    <div className="itemList">
      <div className="itemList__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="main__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="itemList__container">
        {itemArray
          .filter((currValue, index) => index < finalItems)
          .map((currentValue, index) => {
            return (
              <SingleItem
                key={`${title}-${index}`}
                {...currentValue}
                idPath={idPath}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;
