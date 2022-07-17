import { Header } from './components/Header'
import { PageWrapper } from './components/PageWrapper'
import { TaskForm } from './components/TaskForm'
import { TaskBoard } from './components/TaskBoard'

export function App() {
  return (
    <>
      <Header />

      <PageWrapper>
        <TaskForm />
        <TaskBoard />
      </PageWrapper>
    </>
  )
}
