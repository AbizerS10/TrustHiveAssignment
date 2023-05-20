import React, { useEffect, useState } from "react";
import ToDoLists from "./TodoList";

const App = () => {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const itemEvent = (event) => {
    setInputItem(event.target.value);
  };

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredTodos(
      items.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  const listofitems = () => {
    if (inputItem.length === 0) return;
    setShow(false);
    setItems((prev) => [...prev, inputItem]);
    setFilteredTodos((prev) => [...prev, inputItem]);
    setInputItem("");
  };

  const deleteitems = (id) => {
    setItems((prev) => prev.filter((elem, index) => index !== id));
    setFilteredTodos((prev) => prev.filter((elem, index) => index !== id));
  };

  const closeModal = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) setShow(false);
  };

  return (
    <>
      <div className="main">
        <div className="center">
          <h1>ToDo List</h1>
          <button onClick={() => setShow(true)}> Add a todo </button>
          <div className="searchbox">
            <input
              type="text"
              placeholder="search..."
              value={search}
              onChange={searchChange}
            />
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
          <ol>
            {filteredTodos.length > 0 ? (
              filteredTodos.map((itemval, index) => {
                return (
                  <ToDoLists
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteitems}
                  />
                );
              })
            ) : (
              <li>No Todos found</li>
            )}
          </ol>

          {/* add task modal */}
          {show && (
            <div className="modal" onClick={closeModal}>
              <div className="modalMain">
                <input
                  type="text"
                  placeholder="To do....."
                  value={inputItem}
                  onChange={itemEvent}
                />
                <button onClick={listofitems}> + </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
