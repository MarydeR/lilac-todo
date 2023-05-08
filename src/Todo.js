import React from "react";
import { useState } from "react";
import List from "./List";
import "./Todo.css";

export default function Todo() {
  let [input, setInput] = useState("");
  let [list, setList] = useState([]);

  function handleclick(event) {
    event.preventDefault();

    if (input !== "") {
      let id = list.length + 1;
      setList([...list, { id: id, task: input, done: false }]);
      setInput("");
    }
    let inputField = document.getElementById("form");
    inputField.reset();
  }

  function handleinput(event) {
    setInput(event.target.value);
  }
  return (
    <div className="Todo">
      <div className="entry">
        <form id="form">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="New Item"
              autoComplete="off"
              name="todo"
              onInput={handleinput}
            />
            <button className="btn btn-outline-secondary" onClick={handleclick}>
              Update
            </button>
          </div>
        </form>
      </div>

      <List data={list} />
    </div>
  );
}
