import prisma from "@/app/lib/prisma";
import { Todo } from "@prisma/client";

export const getTodos = async (): Promise<Todo[] | []> => {
    const todos = await prisma.todo.findMany();
    return todos;
}