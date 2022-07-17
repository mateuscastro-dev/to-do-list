import { FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuid_v4 } from 'uuid'

import { useTasks } from '../../contexts/TasksContext'

import { Container, Input, Button } from './styles'

export function TaskForm() {
  const { addTask } = useTasks()

  const [newTaskDescription, setNewTaskDescription] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    addTask({
      id: uuid_v4(),
      description: newTaskDescription,
      isCompleted: false
    })

    setNewTaskDescription('')
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Adicione uma nova tarefa'
        value={newTaskDescription}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewTaskDescription(event.target.value)
        }
      />

      <Button type='submit' disabled={!newTaskDescription}>
        Criar
        <PlusCircle size={16} />
      </Button>
    </Container>
  )
}
