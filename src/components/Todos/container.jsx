import React from 'react';

import TodosComponent from "./component";

import './styles.scss';

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enterTodo: '',
      todos: [],
    };
  }

  handleEnterTodo = e => {
    this.setState({ enterTodo: e.target.value });
  }

  handleAddTodo = () => {
    const { enterTodo, todos } = this.state;

    if (enterTodo === '') {
      alert("You couldn't add empty todo!!!");
      return;
    }

    const newTodo = {
      id: Math.round(Math.random() * 100),
      value: enterTodo,
      checked: false,
    }

    this.setState({
      enterTodo: '',
      todos: [...todos, newTodo]
    })
  }

  handleRemoveTodo = todoId => {
    const { todos } = this.state;

    const updatedTodos = todos.filter(todo => todoId !== todo.id);

    this.setState({
      todos: updatedTodos
    })
  }

  handleCheckTodo = todoId => {
    const { todos } = this.state;

    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        if (todo.checked) {
          return Object.assign(todo, { checked: false });
        } else {
          return Object.assign(todo, {checked: true});
        }
      }
      return todo;
    })

    this.setState({
      todos: updatedTodos
    })
  }

  get isTodosEmpty() {
    const { todos } = this.state;

    return todos.length === 0;
  }

  render = () => {
    return (
      <TodosComponent
          isTodosEmpty={this.isTodosEmpty}
          onEnterTodo={this.handleEnterTodo}
          onAddTodo={this.handleAddTodo}
          onRemoveTodo={this.handleRemoveTodo}
          onClickCheckTodo={this.handleCheckTodo}
          {...this.state}
      />
    )
  }
}

export default Todos;
