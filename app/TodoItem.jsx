import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarForm } from "./CalendarForm";

const TodoItem = ({
  todo,
  index,
  editIndex,
  setViewInputBox,
  handleEditTodo,
  handleSaveEditedTodo,
  handleDeleteTodo,
  inputTitle,
  setInputTitle,
  inputDescription,
  setInputDescription,
  setEditIndex,
}) => {
  return (
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
                onClick={handleSaveEditedTodo}
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
          </div>
        )}
      </div>
      <hr />
    </li>
  );
};

export default TodoItem;
