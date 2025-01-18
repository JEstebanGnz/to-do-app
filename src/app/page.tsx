import { NewTodo, TodoGrid, TodoItem } from "@/components";
import Image from "next/image";
import prisma from "./lib/prisma";
import { getTodos } from '../helpers/todos';
import * as api from '../helpers/todos'

export default async function Home() {

  //TODO Get the todos from Postgres DB / Supabase

  const todos = await api.getTodos();

  return (
    <div className="my-0 mx-auto pt-12 max-w-3xl">

      <h1 className="text-center text-2xl font-bold">To-do App</h1>

      <NewTodo />

      <TodoGrid todos={todos}/>

    </div>
  );
}
