'use client'
import * as todosApi from '@/helpers/todos';
import { ApiError } from '@/interface/api/InterfaceApi';
import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

interface Props {
  todo?: Todo;
}

export const TodoForm = ({ todo }: Props) => {
  const router = useRouter();

  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");
  const [error, setError] = useState<string | null>(null); // State to store the error message

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (error) setError(null);
    try {
      if (todo) {
        await todosApi.updateTodo(todo.id, title, description);
      } else {
        await todosApi.createTodo(title, description);
      }
      router.push('/'); 
    } catch (err) {
      const apiError = err as ApiError;
        setError(apiError.errors[0].message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {todo ? 'Editar tarea' : 'Crear nueva tarea'}
      </h2>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Título
          </label>
          <input
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
            placeholder="Ingresa el título de la tarea"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={4}
            className="w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all resize-none"
            placeholder="Describe la tarea en detalle"
          />
        </div>

        <button
          type="submit"
          className="btn-primary"
        >
          {todo ? 'Actualizar' : 'Crear'}
        </button>
      </div>
    </form>
  );
};
