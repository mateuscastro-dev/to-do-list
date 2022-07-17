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
  const haveTasks = false

  return (
    <Container>
      <Header>
        <HeaderTextWrapper>
          <HeaderText type='created'>Tarefas criadas</HeaderText>
          <HeaderBadge>0</HeaderBadge>
        </HeaderTextWrapper>

        <HeaderTextWrapper>
          <HeaderText type='completed'>Concluídas</HeaderText>
          <HeaderBadge>0</HeaderBadge>
        </HeaderTextWrapper>
      </Header>

      {haveTasks ? <TaskBoardList /> : <TaskBoardEmpty />}
    </Container>
  )
}
