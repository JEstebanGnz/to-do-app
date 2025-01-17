import { NewTodo, TodoGrid, TodoItem } from "@/components";
import Image from "next/image";

export default function Home() {

  //TODO Get the todos from Postgres DB

  return (
    <div className="my-0 mx-auto pt-12 max-w-3xl">

        <h1 className="text-center text-2xl font-bold">To-do App</h1>

        <NewTodo />

        <TodoGrid />

    </div>
  );
}
