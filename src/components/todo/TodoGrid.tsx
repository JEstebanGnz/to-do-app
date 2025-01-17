import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoGrid = () => {

   const todos = ['Tiempo de calidad con mi vida ','Ir a comer', 'Jugar', 'Entrenar']

  return (
    <div className='mt-6'>
    
        {todos.map(todo => <TodoItem todo={todo} key={todo} />)}
    
    
    </div>
  )
}
