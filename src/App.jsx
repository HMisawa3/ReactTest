import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodo);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodo = [...imcompleteTodos];
    newTodo.splice(index, 1);
    setImcompleteTodos(newTodo);
  };

  const onClickCompleate = (index) => {
    const newImcompleteTodo = [...imcompleteTodos];
    newImcompleteTodo.splice(index, 1);

    const newCompleateTodo = [...completeTodos, imcompleteTodos[index]];
    setImcompleteTodos(newImcompleteTodo);
    setCompleteTodos(newCompleateTodo);
  };

  const onClickBack = (index) => {
    const newCompleateTodo = [...completeTodos];
    newCompleateTodo.splice(index, 1);

    const newImcompleteTodo = [...imcompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleateTodo);
    setImcompleteTodos(newImcompleteTodo);
  };

  return (
    <>
      <div className="input_area">
        <input
          id="addText"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button id="addButton" onClick={onClickAdd}>
          追加
        </button>
      </div>
      <div className="imcomplete_area">
        <p className="title">未完了のタスク</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p className="record">{todo}</p>
                  <button onClick={() => onClickCompleate(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete_area">
        <p className="title">完了のタスク</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list_row">
                  <p className="record">{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
