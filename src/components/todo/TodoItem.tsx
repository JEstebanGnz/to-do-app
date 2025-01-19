"use client";
import { Todo } from "@prisma/client";
import React from "react";
import {
  IoCheckboxOutline,
  IoPencilSharp,
  IoSquareOutline,
  IoTrashOutline,
} from "react-icons/io5";
import * as todosApi from '@/helpers/todos' 
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {

  const router = useRouter();

  const deleteTodo = async () => {
    await todosApi.deleteTodo(todo.id)
    router.refresh();
  }

  const toggleTodo = async () => {
    await todosApi.toggleTodo(todo.id, !todo.completed)
    router.refresh();
  }

  return (
    <div className="mt-3 bg-green-50 rounded-lg shadow-sm p-5 border-dashed border flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div onClick= {() => toggleTodo()} className="flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-green-100">
          {
            todo.completed
              ? <IoCheckboxOutline size={30} />
              : <IoSquareOutline size={30} />
          }
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium">{todo.title}</span>
            <p className="text-sm text-gray-600 max-w-xl line-clamp-2 hover:line-clamp-none">
              {todo.description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <Link href={`/todo/${todo.id}`}>
          <button
            type="button"
            className="flex items-center justify-center rounded bg-blue-400 p-2 text-white hover:bg-blue-700 transition-all"
          >
            <IoPencilSharp />
            <span className="ml-2">Editar</span>
          </button>
          </Link>
          <button
            onClick={() => deleteTodo()}
            type="button"
            className="flex items-center justify-center rounded bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
          >
            <IoTrashOutline />
            <span className="ml-2">Borrar</span>
          </button>
        </div>
      </div>
    </div>
  );
};