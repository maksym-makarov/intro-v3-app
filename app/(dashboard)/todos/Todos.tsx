'use client'
import { useTodos, Todo } from '@/app/(dashboard)/todos/TodosProvider'
import { FC } from 'react'
import { Button } from '@/app/(dashboard)/todos/Button'

const Todo: FC<{ todo: Todo }> = ({ todo: { title, description } }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export const Todos = () => {
  const [todos] = useTodos()
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
      <Button />
    </>
  )
}
