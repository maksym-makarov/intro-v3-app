'use client'

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react'

export type Todo = {
  id: number | string
  title: string
  description?: string
  isCompleted: boolean
}

const DEFAULT_TODOS: Todo[] = [
  {
    id: 0,
    title: 'Get familiar with Next',
    description: 'read official documentation',
    isCompleted: false,
  },
  {
    id: 1,
    title: 'Discovery getting started',
    description: 'make a discovery',
    isCompleted: false,
  },
]

const TodosContext = createContext<[Todo[], any]>([[], () => {}])

export const useTodos = () => useContext(TodosContext)
export const TodosProvider: FC<PropsWithChildren> = ({ children }) => {
  const state = useState<Todo[]>(DEFAULT_TODOS)

  return <TodosContext.Provider value={state}>{children}</TodosContext.Provider>
}
