
import React from 'react'
import * as todosApi from '@/helpers/todos';
import { getTodo } from '../../../helpers/todos';
import { TodoForm } from '@/components';

interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function EditTodo({ params }: Props) {

  const { id } = await params

  console.log(id);

  const todo = await todosApi.getTodo(id);

  return (
    <div>
      {
        todo && <TodoForm todo={todo} />
      }
    </div>
  )
}
