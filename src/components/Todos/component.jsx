import React from "react";

import EmptyList from "./EmptyList";
import EnterTodo from "./EnterTodo";
import List from "./List";

const TodosComponent = ({ isTodosEmpty, onEnterTodo, onAddTodo, onRemoveTodo , onClickCheckTodo, enterTodo, todos }) => (
  <div className="todos">
    <h1 className="title">Todos</h1>
    <EnterTodo
      value={enterTodo}
      onChange={onEnterTodo}
      onClick={onAddTodo}
    />
    {isTodosEmpty
      ? <EmptyList/>
      : (
        <List
          todos={todos}
          onRemoveTodo={onRemoveTodo}
          onClickCheckTodo={onClickCheckTodo}
        />
      )
    }
  </div>
)

export default TodosComponent;
