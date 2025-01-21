import prisma from "@/app/lib/prisma";
import { Todo } from "@prisma/client";

export const getTodo = async (id: string): Promise<Todo | null> => {
    const todo = await prisma.todo.findFirst({ where: { id } });
    return todo;
}

export const getTodos = async (): Promise<Todo[] | []> => {
    const todos = await prisma.todo.findMany({ orderBy: [{ createdAt: 'desc' }] });
    return todos;
}

export const createTodo = async (title: string, description: string): Promise<Todo> => {
    const response = await fetch(`/api/tasks/`, {
        cache:'no-store',
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw data
    }

    return data;
}

export const toggleTodo = async (id: string, completed: boolean): Promise<Todo> => {
    const todo = await fetch(`/api/tasks/${id}`, {
        cache:'no-store',
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    return todo
}

export const updateTodo = async (id: string, title?: string, description?: string): Promise<Todo> => {
    const response = await fetch(`/api/tasks/${id}`, {
        cache:'no-store',
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();

    if (!response.ok) {
        throw data
    }

    return data;

}


export const deleteTodo = async (id: string): Promise<boolean> => {

    await fetch(`/api/tasks/${id}`, {
        cache:'no-store',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())

    return true;
}
