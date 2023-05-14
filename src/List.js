import React from "react";

import "./List.css";

export default function List(props) {
  if (props.data.length !== 0) {
    return (
      <div className="List">
        <div className="todolist">
          <ul>
            {props.data.map(function (todo, index) {
              if (todo.done === false) {
                return (
                  <li key="index">
                    {" "}
                    <input type="checkbox" name="todolist" id="checkbox" />
                    <label htmlFor="checkbox"> {todo.task} </label>
                  </li>
                );
              } else return null;
            })}
          </ul>
        </div>
        <div>
          {" "}
          <button className="btn btn-outline-secondary">Clear</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="List">
        <h2 className="nf text-center"> No Item Found </h2>
      </div>
    );
  }
}
