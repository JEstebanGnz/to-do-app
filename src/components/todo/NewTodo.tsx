import React from "react";

export const NewTodo = () => {
  return (
    <form className="mt-5 flex w-full justify-between">
        <input
          type="text"
          className=" w-5/6 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
          placeholder="¿Qué vas a hacer hoy?"
        />

        <button
          type="submit"
          className="flex items-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
        >
          Crear
        </button>
    </form>
  );
};
