"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarForm } from "./CalendarForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [viewInputBox, setViewInputBox] = useState(false);

  const handleAddTodo = () => {
    if (inputTitle.trim() !== "" && inputDescription.trim() !== "") {
      setTodos([
        ...todos,
        { title: inputTitle, description: inputDescription },
      ]);
      setInputTitle("");
      setInputDescription("");
    }
  };
  // Gaining index of todo to be edited
  const handleEditTodo = (index) => {
    const todoToEdit = todos[index];
    setInputTitle(todoToEdit.title);
    setInputDescription(todoToEdit.description);
    setEditIndex(index);
  };
  // Saving the edited todo
  const handleSaveEditedTodo = (index) => {
    if (inputTitle.trim() !== "" && inputDescription.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = {
        title: inputTitle,
        description: inputDescription,
      };
      setTodos(updatedTodos);
      setInputTitle("");
      setInputDescription("");
      setEditIndex(null);
    }
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
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            editIndex={editIndex}
            setViewInputBox={setViewInputBox}
            inputTitle={inputTitle}
            setInputTitle={setInputTitle}
            inputDescription={inputDescription}
            setInputDescription={setInputDescription}
            handleEditTodo={handleEditTodo}
            handleSaveEditedTodo={handleSaveEditedTodo}
            handleDeleteTodo={handleDeleteTodo}
            setEditIndex={setEditIndex}
          />
        ))}
      </ul>
      {viewInputBox ? (
        <div className="border rounded-xl p-3">
          <div>
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
            <div className="flex flex-row py-2 gap-2">
              <CalendarForm />
              <Select className="outline-none">
                <SelectTrigger className="w-[110px] outline-none">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Priority 1</SelectItem>
                  <SelectItem value="dark">Priority 2</SelectItem>
                  <SelectItem value="dark2">Priority 3</SelectItem>
                  <SelectItem value="system">Priority 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-row justify-end pt-3">
            <div>
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
