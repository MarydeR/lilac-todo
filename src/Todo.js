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

  function handlecheckbox(id) {
    let checkedlist = list.map(function (todo) {
      if (todo.id === id) return { ...todo, done: !todo.done };
      else return todo;
    });
    console.log(checkedlist);
    setList(checkedlist);
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
              required
              autoComplete="off"
              name="todo"
              onInput={handleinput}
            />
            <button className="btn btn-outline-secondary" onClick={handleclick}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div> </div>
      <List data={list} handleChange={handlecheckbox} />
    </div>
  );
}
