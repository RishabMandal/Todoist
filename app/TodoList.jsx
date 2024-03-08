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
  const [priority, setPriority] = useState("Priority 4"); // State for priority
  const [selectedDate, setSelectedDate] = useState(null); // State for selected date
  const [assignment, setAssignment] = useState("Assign");
  const [editIndex, setEditIndex] = useState(null);

  const [email, setEmail] = useState("");

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
          assignment: assignment,
          email: email,
        },
      ]);
      setInputTitle("");
      setInputDescription("");
      setPriority("Priority 4"); // Reset priority after adding todo
      setSelectedDate(null); // Reset selected date after adding todo
      setAssignment("Assign"); // Reset assignment
      setEmail(null);
      setViewInputBox(false);
    }
  };

  // Gaining index of todo to be edited
  const handleEditTodo = (index) => {
    const todoToEdit = todos[index];
    setInputTitle(todoToEdit.title);
    setInputDescription(todoToEdit.description);
    setPriority(todoToEdit.priority);
    setAssignment(todoToEdit.assignment);
    setEmail(todoToEdit.email);
    setSelectedDate(todoToEdit.selectedDate);
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
        assignment: assignment,
        email: email,
      };
      setTodos(updatedTodos);
      setInputTitle("");
      setInputDescription("");
      setPriority("Priority 4"); // Reset priority after adding todo
      setSelectedDate(null); // Reset selected date after adding todo
      setAssignment("Assign"); // Reset assignment
      setEmail(null); // Reset assignment
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
            setEmail={setEmail} // Pass email as prop
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
              onChange={(e) => setInputTitle(e.target.value)}
            />
            <textarea
              className="outline-none p-2 w-full text-sm"
              rows="1"
              placeholder="Description"
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
                <SelectTrigger className="w-[150px] outline-none">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Priority 1">
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        // fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-flag stroke-red-500 fill-red-500"
                      >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" x2="4" y1="22" y2="15" />
                      </svg>
                      <div>Priority 1</div>
                    </div>
                  </SelectItem>
                  <SelectItem value="Priority 2">
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-flag stroke-orange-500 fill-orange-500"
                      >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" x2="4" y1="22" y2="15" />
                      </svg>
                      <div>Priority 2</div>
                    </div>
                  </SelectItem>
                  <SelectItem value="Priority 3">
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-flag stroke-blue-500 fill-blue-500"
                      >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" x2="4" y1="22" y2="15" />
                      </svg>
                      <div>Priority 3</div>
                    </div>
                  </SelectItem>
                  <SelectItem value="Priority 4">
                    <div className="flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-flag"
                      >
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" x2="4" y1="22" y2="15" />
                      </svg>
                      <div>Priority 4</div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <div>
                <Select
                  className="outline-none"
                  onValueChange={(value) => {
                    setAssignment(value);
                    // Reset email input when changing assignment type
                    if (value !== "Assign someone else") {
                      setEmail("");
                    }
                  }}
                  // defaultValue="Assign"
                >
                  <SelectTrigger className="outline-none">
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
                {assignment === "Assign someone else" && (
                  <div className="mt-2">
                    <label htmlFor="email" className="block mb-1">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
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
              Add Task
            </button>
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
