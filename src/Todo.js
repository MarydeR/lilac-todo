import React from "react";
import { useState } from "react";
import List from "./List";
import "./Todo.css";

export default function Todo() {
  let [todo, setTodo] = useState("");
  let [list, setList] = useState([]);

  function addtodo(event) {
    event.preventDefault();
    if (todo !== "") {
      setList([...list, todo]);
      setTodo("");
    }
  }

  function handleNewWord(event) {
    setTodo(event.target.value);
  }
  return (
    <div className="Todo">
      <div className="entry">
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="New Item"
              autoComplete="off"
              name="todo"
              onChange={handleNewWord}
            />
            <button className="btn btn-outline-secondary" onClick={addtodo}>
              Update
            </button>
          </div>
        </form>
      </div>

      <List data={list} />
    </div>
  );
}
