import React from 'react'
import { TodoItem } from './TodoItem'
import { Todo } from '@prisma/client'

interface Props{
  todos: Todo[]
}

export const TodoGrid = ({todos}: Props) => {

  return (
    <div className='mt-6'>
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </div>
  )
}
