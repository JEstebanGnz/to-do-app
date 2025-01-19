import prisma from "@/app/lib/prisma";
import { Todo } from "@prisma/client";
import { boolean } from "zod";

export const getTodo = async (id: string): Promise<Todo | null> => {
    const todo = await prisma.todo.findFirst({where:{id}});
    return todo;
}

export const getTodos = async (): Promise<Todo[] | []> => {
    const todos = await prisma.todo.findMany();
    return todos;
}

export const createTodo = async (title: string, description: string): Promise<Todo> => {
    const todo = await fetch(`/api/tasks/`, {
        method: 'POST',
        body: JSON.stringify({title,description}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    return todo
}

export const toggleTodo = async (id: string, completed: boolean): Promise<Todo> => {
    const todo = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({completed}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    return todo
}

export const updateTodo = async (id: string, title?: string, description?: string): Promise<Todo> => {
    const todo = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({title,description}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    return todo
}


export const deleteTodo = async (id: string): Promise<boolean> => {

    await fetch(`/api/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())

    return true;
}