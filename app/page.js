"use client";

import TodoList from "./TodoList";
import { useState } from "react";
import VideoList from "./VideoList";

export default function Home() {
  const [todo, setTodo] = useState(true);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-5 pb-24">
      <div className="flex flex-row gap-5">
        <button onClick={() => setTodo(true)}>Todo</button>
        <button onClick={() => setTodo(false)}>Video</button>
      </div>
      {todo ? <TodoList /> : <VideoList />}
    </div>
  );
}
