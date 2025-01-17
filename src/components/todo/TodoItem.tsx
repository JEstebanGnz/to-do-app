"use client";
import React from "react";
import {
  IoPencilSharp,
  IoSquareOutline,
  IoTrashOutline,
} from "react-icons/io5";

interface props {
  todo: String;
}

export const TodoItem = ({ todo }: props) => {
    return (
      <div className="mt-3 bg-red-50 rounded-lg shadow-sm p-5 border-dashed border border-red-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 bg-red-100">
            <IoSquareOutline size={20} />
          </div>
          <span className="text-center sm:text-left">{todo}</span>
        </div>
        
        <div className="flex items-center gap-2">
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
    );
  };
