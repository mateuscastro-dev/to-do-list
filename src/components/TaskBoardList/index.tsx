import { useTasks } from '../../contexts/TasksContext'

import { Task } from '../Task'

import { Container } from './styles'

export function TaskBoardList() {
  const { tasks } = useTasks()

  return (
    <Container>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </Container>
  )
}
