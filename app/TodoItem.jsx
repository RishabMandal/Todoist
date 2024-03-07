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
import { Button } from "@/components/ui/button";

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
  setAssignment,
  selectedDate,
  setSelectedDate,
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
              <Select
                className="outline-none"
                onValueChange={(value) => setAssignment(value)}
              >
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
              <div
                className={`${
                  todo.priority == "Priority 1"
                    ? "ring-red-500"
                    : todo.priority == "Priority 2"
                    ? "ring-orange-500"
                    : todo.priority == "Priority 3"
                    ? "ring-blue-500"
                    : "ring-gray-400"
                } mt-1 h-fit border ring-2 rounded-full p-2`}
              ></div>
              <div>
                <h3 className="text-lg font-semibold">{todo.title}</h3>
                <p className="text-gray-500">{todo.description}</p>
                <p className="text-gray-500 mt-2">
                  <Button
                    variant={"outline"}
                    className={`w-[240px] pl-3 text-left font-normal ${
                      !todo.date && "text-muted-foreground"
                    }`}
                  >
                    {todo.date ? (
                      format(todo.date, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </p>
              </div>
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
