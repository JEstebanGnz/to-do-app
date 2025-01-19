import prisma from '@/app/lib/prisma'
import { createTodoSchema } from '@/app/schemas/todo/schema';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      { message: 'Error interno del servidor, intenta más tarde.' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = createTodoSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: 'Error al crear todo',
          errors: validation.error.errors.map(error => ({
            field: error.path.join('.'),
            message: error.message
          }))
        },
        { status: 400 }
      );
    }

    // If validation passes, create the todo
    const todo = await prisma.todo.create({
      data: validation.data
    });

    return NextResponse.json(todo, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' },
      { status: 500 })
  }
}