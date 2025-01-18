"use client";
import { Todo } from "@prisma/client";
import React from "react";
import {
  IoPencilSharp,
  IoSquareOutline,
  IoTrashOutline,
} from "react-icons/io5";

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  return (
    <div className="mt-3 bg-green-50 rounded-lg shadow-sm p-5 border-dashed border flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-green-100">
            <IoSquareOutline size={20} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium">{todo.title}</span>
            <p className="text-sm text-gray-600 max-w-xl line-clamp-2 hover:line-clamp-none">
              {todo.description}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="flex items-center justify-center rounded bg-blue-400 p-2 text-white hover:bg-blue-700 transition-all"
          >
            <IoPencilSharp />
            <span className="ml-2">Editar</span>
          </button>
          <button
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