import React, { useEffect, useState } from "react";
import "../App.css";
import todo from "../images/logo.png";

const Testtodo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState("");

  const addItems = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = () => {
    console.log("");
  };

  return (
    <div className="main">
      <div className="logo">
        <figure>
          <img src={todo} alt="todologo" />
          <figcaption>Thêm todo đây này</figcaption>
        </figure>
      </div>

      <div className="addItems">
        <input
          type="text"
          placeholder="Thêm vào đây này"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <i
          className="fa fa-plus add-btn"
          title="add Items"
          onClick={addItems}></i>
      </div>

      <div className="showItems">
        {items.localeCompare((elem, ind) => {
          return (
            <div className="eachItem" key={ind}>
              <h3>{elem}</h3>
              <i
                className="far fa-trash-alt add-btn"
                title="delete btn"
                onClick={deleteItem}></i>
            </div>
          );
        })}
      </div>

      <div className="showItems">
        <button className="btn effect04" data-sm-link-text="Remove-All">
          <span>Check list</span>
        </button>
      </div>
    </div>
  );
};

export default Testtodo;
