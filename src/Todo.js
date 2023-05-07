import React from "react";
import "./Todo.css";

export default function Todo() {
  let [newword, setNeword] = useState("");
  function listupdate(event) {
    event.preventDefault();
  }

  function handleNewWord(event) {
    setNeword(event.target.value);
  }
  return (
    <div className="Todo">
      <div className="entry">
        <form onSubmit={listupdate}>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="New"
              autoComplete="off"
              onChange={handleNewWord}
            />
            <button class="btn btn-outline-secondary">Update</button>
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
