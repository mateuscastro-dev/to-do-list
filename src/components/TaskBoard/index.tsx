import { useTasks } from '../../contexts/TasksContext'
import { Task } from '../../models/task'

import { TaskBoardEmpty } from '../TaskBoardEmpty'
import { TaskBoardList } from '../TaskBoardList'

import {
  Container,
  Header,
  HeaderTextWrapper,
  HeaderText,
  HeaderBadge
} from './styles'

export function TaskBoard() {
  const { tasks } = useTasks()

  const createdTasksCount = tasks.length
  const completedTasksCount = tasks.filter(
    task => task.isCompleted === true
  ).length

  return (
    <Container>
      <Header>
        <HeaderTextWrapper>
          <HeaderText type='created'>Tarefas criadas</HeaderText>
          <HeaderBadge>{createdTasksCount}</HeaderBadge>
        </HeaderTextWrapper>

        <HeaderTextWrapper>
          <HeaderText type='completed'>Concluídas</HeaderText>
          <HeaderBadge>{`${completedTasksCount} de ${createdTasksCount}`}</HeaderBadge>
        </HeaderTextWrapper>
      </Header>

      {tasks.length > 0 ? <TaskBoardList /> : <TaskBoardEmpty />}
    </Container>
  )
}
