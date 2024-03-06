"use client";

import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [viewInputBox, setViewInputBox] = useState(false);

  const handleAddTodo = () => {
    if (inputTitle.trim() !== "" && inputDescription.trim() !== "") {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = {
          title: inputTitle,
          description: inputDescription,
        };
        setTodos(updatedTodos);
        setInputTitle("");
        setInputDescription("");
        setEditIndex(null);
      } else {
        setTodos([
          ...todos,
          { title: inputTitle, description: inputDescription },
        ]);
        setInputTitle("");
        setInputDescription("");
      }
    }
  };

  const handleEditTodo = (index) => {
    const todoToEdit = todos[index];
    setInputTitle(todoToEdit.title);
    setInputDescription(todoToEdit.description);
    setEditIndex(index);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="w-screen max-w-[70rem] bg-white p-10">
      <ul className="my-1">
        <hr />
        {todos.map((todo, index) => (
          // <li key={index} className="">
          //   <div className="my-2 flex flex-row justify-between">
          //     <div>
          //       <h3 className="text-lg font-semibold">{todo.title}</h3>
          //       <p className="text-gray-500">{todo.description}</p>
          //     </div>
          //     <div className="flex">
          //       <button
          //         className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          //         onClick={() => handleEditTodo(index)}
          //       >
          //         Edit
          //       </button>
          //       <button
          //         className="bg-red-500 text-white px-4 py-2 rounded"
          //         onClick={() => handleDeleteTodo(index)}
          //       >
          //         Delete
          //       </button>
          //     </div>
          //   </div>
          //   <hr />
          // </li>
          <li key={index} className="">
            <div className="my-2">
              {editIndex === index ? (
                <div className="border rounded-xl p-3">
                  <input
                    type="text"
                    className="outline-none p-2 pb-0 w-full font-semibold"
                    placeholder="Task name"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                  />
                  <textarea
                    className="outline-none p-2 mb-4 w-full text-sm"
                    rows="1"
                    placeholder="Description"
                    value={inputDescription}
                    onChange={(e) => setInputDescription(e.target.value)}
                  ></textarea>
                  <hr />
                  <div className="flex flex-row justify-end pt-3">
                    <button
                      className="bg-gray-200 font-semibold px-4 py-2 rounded mr-2"
                      onClick={() => setEditIndex(null)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-red-500 font-semibold text-white px-4 py-2 rounded mr-2"
                      onClick={handleAddTodo}
                    >
                      Edit Todo
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{todo.title}</h3>
                    <p className="text-gray-500">{todo.description}</p>
                  </div>
                  {editIndex === index ? (
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                      onClick={handleAddTodo}
                    >
                      Save
                    </button>
                  ) : (
                    <div>
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => {
                          setViewInputBox(false);
                          handleEditTodo(index);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleDeleteTodo(index)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <hr />
          </li>
        ))}
      </ul>
      {viewInputBox ? (
        <div className="border rounded-xl p-3">
          <input
            type="text"
            className="outline-none p-2 pb-0 w-full font-semibold"
            placeholder="Task name"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <textarea
            className="outline-none p-2 mb-4 w-full text-sm"
            rows="1"
            placeholder="Description"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
          ></textarea>
          <hr />
          <div className="flex flex-row justify-end pt-3">
            <button
              className="bg-gray-200 font-semibold px-4 py-2 rounded mr-2"
              onClick={() => setViewInputBox(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 font-semibold text-white px-4 py-2 rounded mr-2"
              onClick={handleAddTodo}
            >
              {editIndex !== null ? "Edit Todo" : "Add Task"}
            </button>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-row gap-3 items-center cursor-pointer text-gray-500 hover:text-red-500"
          onClick={() => setViewInputBox(true)}
        >
          <div className="text-3xl text-red-500 hover:border px-2 hover:rounded-full hover:bg-red-500 hover:text-white">
            +
          </div>
          <div className="text-xl">Add task</div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
