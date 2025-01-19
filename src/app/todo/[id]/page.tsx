import * as todosApi from '@/helpers/todos';
import { TodoForm } from '@/components';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function EditTodo({ params }: Props) {

  const { id } = await params

  const todo = await todosApi.getTodo(id);

  if (!todo) {
    notFound();
  }

  return (
    <div>
      {
        todo && <TodoForm todo={todo} />
      }
    </div>
  )
}
