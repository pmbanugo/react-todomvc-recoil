import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TodoTextInput = ({ text, newTodo, editing, placeholder, onSave }) => {
  const [inputValue, setInputValue] = React.useState(text ?? "");

  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      if (newTodo) {
        setInputValue("");
      }
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = (e) => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: editing,
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={inputValue}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default TodoTextInput;
