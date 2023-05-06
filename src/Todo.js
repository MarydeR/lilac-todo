import React from "react";
import "./Todo.css";

export default function Todo() {
  return (
    <div className="Todo">
      <div className="entry">
        <form>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="New"
              autoComplete="off"
            />
          </div>
        </form>
      </div>
      <div className="todolist">
        <ul>
          <li>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">sample check box </label>
          </li>
          <li>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">item 1 </label>
          </li>
          <li>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">item 2 </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
