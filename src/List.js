import React from "react";

import "./List.css";

export default function List(props) {
  if (props.data !== []) {
    return (
      <div className="List">
        <div className="todolist">
          <ul>
            {props.data.map(function (todo, index) {
              return (
                <li key="index">
                  {" "}
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox"> {todo} </label>
                </li>
              );
            })}
          </ul>
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
