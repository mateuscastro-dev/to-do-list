import { Header } from './components/Header'
import { PageWrapper } from './components/PageWrapper'
import { TaskForm } from './components/TaskForm'
import { TaskBoard } from './components/TaskBoard'

import { TasksProvider } from './contexts/TasksContext'

export function App() {
  return (
    <TasksProvider>
      <Header />

      <PageWrapper>
        <TaskForm />
        <TaskBoard />
      </PageWrapper>
    </TasksProvider>
  )
}
