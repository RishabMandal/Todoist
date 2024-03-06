"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarForm } from "./CalendarForm";

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

  // Shadcn ui
  // const FormSchema = z.object({
  //   dob: z.date({
  //     required_error: "A date of birth is required.",
  //   }),
  // });

  // const form =
  //   useForm <
  //   z.infer <
  //   typeof FormSchema >>
  //     {
  //       resolver: zodResolver(FormSchema),
  //     };

  // function onSubmit(data) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }

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
                  <div className="flex flex-row py-2 gap-2">
                    <CalendarForm />
                    {/* <Form {...form}>
                        <form
                          onSubmit={form.handleSubmit(onSubmit)}
                          className="space-y-8"
                        >
                          <FormField
                            control={form.control}
                            name="dob"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-[240px] pl-3 text-left font-normal",
                                          !field.value &&
                                            "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent
                                    className="w-auto p-0"
                                    align="start"
                                  >
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) =>
                                        date > new Date() ||
                                        date < new Date("1900-01-01")
                                      }
                                      initialFocus
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormDescription>
                                  Your date of birth is used to calculate your
                                  age.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit">Submit</Button>
                        </form>
                      </Form> */}
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
          {/* <hr /> */}
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
