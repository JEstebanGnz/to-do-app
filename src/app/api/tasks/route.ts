import prisma from '@/app/lib/prisma'
import { createTodoSchema } from '@/app/schemas/todo/schema';
import { NextResponse} from 'next/server'

export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json(
      {message: `Error interno del servidor: ${error}` },
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

    const todo = await prisma.todo.create({
      data: validation.data
    });

    return NextResponse.json(todo, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: `Error interno del servidor: ${error}` },
      { status: 500 })
  }
}