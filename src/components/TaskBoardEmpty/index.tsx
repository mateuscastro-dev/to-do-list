import { ClipboardText } from 'phosphor-react'

import { Container, Message, MessageWrapper } from './styles'

export function TaskBoardEmpty() {
  return (
    <Container>
      <ClipboardText size={56} />

      <MessageWrapper>
        <Message>Você ainda não tem tarefas cadastradas</Message>
        <Message>Crie tarefas e organize seus itens a fazer</Message>
      </MessageWrapper>
    </Container>
  )
}
