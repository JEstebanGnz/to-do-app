import prisma from '@/app/lib/prisma'
import { createTodoSchema, updateTodoSchema } from '@/app/schemas/todo/schema';
import { NextResponse, NextRequest } from 'next/server'

interface Segments {
  params: Promise<{
    id: string
  }>
}

export async function PUT(request: Request, { params }: Segments) {

  const { id } = await params
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    return NextResponse.json({ message: `No existe un todo con el id ${id}` }, { status: 404 })
  }
  const body = await request.json();

  try {

    const validation = updateTodoSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        {
          message: 'Error al acutalizar todo',
          errors: validation.error.errors.map(error => ({
            field: error.path.join('.'),
            message: error.message
          }))
        },
        { status: 400 }
      );
    }

    const updatedTodo = await prisma.todo.update({
      where: { id: id }, data:
        { ...validation.data }
    })

    return NextResponse.json(updatedTodo);
  }

  catch (error) {
    return NextResponse.json({ message: 'Error interno del servidor' },
      { status: 500 })
  }
}


export async function DELETE(request: Request, { params }: Segments) {

  const { id } = await params
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    return NextResponse.json({ message: `No existe un todo con el id ${id}` }, { status: 404 })
  }

  try {
    await prisma.todo.delete({ where: { id } });
    return NextResponse.json({ message: 'Todo eliminado correctamente' })
  } catch (error) {
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 })
  }
}