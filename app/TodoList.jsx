"use client";

import React, { useEffect, useState } from "react";
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
  const [priority, setPriority] = useState(null); // State for priority
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date
  const [assignment, setAssignment] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const [viewInputBox, setViewInputBox] = useState(false);

  const handleAddTodo = () => {
    if (inputTitle.trim() !== "" && inputDescription.trim() !== "") {
      setTodos([
        ...todos,
        {
          title: inputTitle,
          description: inputDescription,
          priority: priority, // Adding priority to the todo object
          date: selectedDate, // Adding selected date to the todo object
        },
      ]);
      setInputTitle("");
      setInputDescription("");
      setPriority(null); // Reset priority after adding todo
      setSelectedDate(null); // Reset selected date after adding todo
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
        priority: priority, // Adding priority to the todo object
        date: selectedDate, // Adding selected date to the todo object
      };
      setTodos(updatedTodos);
      setInputTitle("");
      setInputDescription("");
      setPriority(null); // Reset priority after adding todo
      setSelectedDate(null); // Reset selected date after adding todo
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
            priority={priority} // Pass priority as prop
            setPriority={setPriority}
            assignment={assignment}
            setAssignment={setAssignment}
            selectedDate={selectedDate} // Pass selected date as prop
            setSelectedDate={setSelectedDate} // Pass selected date as prop
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
              <CalendarForm
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
              <Select
                className="outline-none"
                onValueChange={(value) => setPriority(value)}
                defaultValue="Priority 4"
              >
                <SelectTrigger className="w-[110px] outline-none">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Priority 1">Priority 1</SelectItem>
                  <SelectItem value="Priority 2">Priority 2</SelectItem>
                  <SelectItem value="Priority 3">Priority 3</SelectItem>
                  <SelectItem value="Priority 4">Priority 4</SelectItem>
                </SelectContent>
              </Select>
              <Select className="outline-none">
                <SelectTrigger className="w-[110px] outline-none">
                  <SelectValue placeholder="Assign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Assign to partner">
                    Assign to partner
                  </SelectItem>
                  <SelectItem value="Assign someone else">
                    Assign someone else
                  </SelectItem>
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
          <div className="text-3xl text-red-500 mb-1">+</div>
          <div className="text-xl">Add task</div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
