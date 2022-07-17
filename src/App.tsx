import { Header } from './components/Header'
import { PageWrapper } from './components/PageWrapper'
import { TaskForm } from './components/TaskForm'

export function App() {
  return (
    <>
      <Header />

      <PageWrapper>
        <TaskForm />
      </PageWrapper>
    </>
  )
}
