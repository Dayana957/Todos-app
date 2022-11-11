import React from "react";

import './styles.scss';

const Item = ({ id, value, checked, onRemoveTodo, onClickCheckTodo }) => (
  <li className="item">
    <div className={checked ? 'task-done' : 'task-wait'}>
      <input
        className="check"
        type="checkbox"
        onClick={() => onClickCheckTodo(id)}
      />
      {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
