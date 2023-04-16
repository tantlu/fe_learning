import React, { useState, useEffect } from "react";
import todo from "../images/logo.png";
import "../App.css";

// to get the data from LS

const getLocalItmes = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItmes());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("Please type to input");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
        completed: false,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  // delete the items
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  // edit the item

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });

    if (newEditItem.completed) {
      return;
    }
    setToggleSubmit(false);

    setInputData(newEditItem.name);

    setIsEditItem(id);
  };

  // remove all
  const removeAll = () => {
    setItems([]);
  };

  //markComplete
  const markComplete = (id) => {
    const updateditems = items.map((elem) => {
      if (elem.id === id) {
        return { ...elem, completed: true };
      }
      return elem;
    });
    setItems(updateditems);
  };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main">
        <div className="logo">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption>Add Your Todo List</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={addItem}></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="Update Item"
                onClick={addItem}></i>
            )}
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-status">
                    {elem.completed ? "Complete" : "Todo"}
                  </div>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(elem.id)}></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}></i>
                    <i
                      className="far fa-circle-check add-btn"
                      title="check Item"
                      onClick={() => markComplete(elem.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* clear all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}>
              <span> CHECK LIST </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
