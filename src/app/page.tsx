import { TodoGrid } from "@/components";
import Link from "next/link";
import prisma from "./lib/prisma";

export default async function Home() {

  const todos = await prisma.todo.findMany({ orderBy: [{ createdAt: 'desc' }] });

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
