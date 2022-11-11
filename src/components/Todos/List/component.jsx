import React from "react";

import Item from "./Item";

import './styles.scss';

const List = ({ todos, onRemoveTodo, onClickCheckTodo }) => (
  <ul className="list">
    {todos.map(({ id, value, checked }) => (
      <Item
        key={id}
        id={id}
        value={value}
        checked={checked}
        onRemoveTodo={onRemoveTodo}
        onClickCheckTodo={onClickCheckTodo}
      />
    ))}
  </ul>
)

export default List;
