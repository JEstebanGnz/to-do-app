import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import * as zod from 'zod'


export async function GET(request: Request) {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

//Zod schema builder
const createTodoSchema = zod.object({
  title: zod.string(),
  description: zod.string()
})

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = createTodoSchema.parse(body);
    const todo = await prisma.todo.create({ data })

    return NextResponse.json(todo);

  } catch (error) {
    return NextResponse.json({ 'message': `Error: ${error}` })
  }
}