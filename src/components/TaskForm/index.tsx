import { PlusCircle } from 'phosphor-react'

import { Container, Input, Button } from './styles'

export function TaskForm() {
  return (
    <Container>
      <Input type='text' placeholder='Adicione uma nova tarefa' />

      <Button type='submit'>
        Criar
        <PlusCircle size={16} />
      </Button>
    </Container>
  )
}
