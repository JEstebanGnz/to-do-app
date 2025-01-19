import { TodoGrid, TodoItem } from "@/components";
import Image from "next/image";
import prisma from "./lib/prisma";
import * as todosApi from '../helpers/todos'
import Link from "next/link";

export default async function Home() {

  const todos = await todosApi.getTodos();

  return (
    <div>

      <h1 className="text-center text-2xl font-bold mb-10">To-do App</h1>

      <Link
        href='/todo/create'
        className="btn-primary"
      >
        Crear
      </Link>

      <TodoGrid todos={todos} />

    </div>
  );
}
