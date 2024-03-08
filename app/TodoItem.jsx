import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
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
  priority,
  setPriority,
  assignment,
  setAssignment,
  selectedDate,
  setSelectedDate,
  setEmail,
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
              <CalendarForm
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
              <Select
                className="outline-none"
                onValueChange={(value) => setPriority(value)}
                defaultValue={todo.priority}
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
                  defaultValue={todo.assignment}
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
                {/* {todo.assignment === "Assign someone else" && ( */}
                {assignment === "Assign someone else" && (
                  <div className="mt-2">
                    <label htmlFor="email" className="block mb-1">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={todo?.email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                )}
              </div>
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
            <div className="flex flex-row gap-3">
              <input
                type="checkbox"
                // onChange={() => alert("Click")}
                className={`appearance-none ${
                  todo.priority == "Priority 1"
                    ? "ring-red-500"
                    : todo.priority == "Priority 2"
                    ? "ring-orange-500"
                    : todo.priority == "Priority 3"
                    ? "ring-blue-500"
                    : "ring-gray-400"
                } mt-1 h-fit border ring-2 rounded-full p-2 cursor-pointer`}
              />
              <div>
                <h3 className="text-lg font-semibold">{todo.title}</h3>
                <p className="text-gray-500">{todo.description}</p>
                <div className="flex flow-row gap-5">
                  <p className="text-gray-500 mt-2">
                    {todo.date ? (
                      format(todo.date, "PPP")
                    ) : (
                      <span>No date picked</span>
                    )}
                  </p>
                  {todo.assignment !== "Assign" && (
                    <p className="text-gray-500 mt-2">{todo.assignment}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <button
                className="text-white py-2"
                onClick={() => {
                  setViewInputBox(false);
                  handleEditTodo(index);
                }}
              >
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
                  class="lucide lucide-pencil stroke-black"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </button>
              <button
                className="text-white px-4 py-2"
                onClick={() => handleDeleteTodo(index)}
              >
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
                  className="lucide lucide-trash-2 stroke-red-600"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
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
