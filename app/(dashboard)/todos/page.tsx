import { TodosProvider } from '@/app/(dashboard)/todos/TodosProvider'
import { Todos } from '@/app/(dashboard)/todos/Todos'

const TodosPage = () => {
  return (
    <>
      <h1 className="flex justify-center py-2">Todos Page</h1>
      <TodosProvider>
        <Todos />
      </TodosProvider>
    </>
  )
}

export default TodosPage
