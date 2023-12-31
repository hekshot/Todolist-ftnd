import React from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoFrom";
import TodoListItem from "./TodoListItem";
import { removeTodo, markTodoAsCompleted } from "./actions";
import { displayAlert } from "./thunks";
import "./TodoList.css";

const TodoList = ({
  todos = [{ text: "hello" }],
  onRemovePressed,
  onCompletedPressed,
  onDisplayAlertClicked,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
