import { Check, Trash } from 'phosphor-react'

import { Task as TaskModel } from '../../models/task'
import { useTasks } from '../../contexts/TasksContext'

import {
  Container,
  CheckboxWrapper,
  CheckboxHidden,
  Checkbox,
  CheckboxLabel
} from './styles'

interface TaskProps {
  task: TaskModel
}

export function Task({ task }: TaskProps) {
  const { checkTask, removeTask } = useTasks()

  function handleCheckTask() {
    checkTask(task)
  }

  function handleRemoveTask() {
    removeTask(task)
  }

  return (
    <Container checked={task.isCompleted}>
      <CheckboxWrapper onClick={handleCheckTask}>
        <CheckboxHidden checked={task.isCompleted} onChange={handleCheckTask} />

        <Checkbox checked={task.isCompleted}>
          <Check size={16} color='white' />
        </Checkbox>

        <CheckboxLabel checked={task.isCompleted}>
          {task.description}
        </CheckboxLabel>
      </CheckboxWrapper>

      <Trash size={24} onClick={handleRemoveTask} />
    </Container>
  )
}
