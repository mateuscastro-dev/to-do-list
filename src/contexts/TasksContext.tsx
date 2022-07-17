import { createContext, useContext, useState } from 'react'

import { Task } from '../models/task'

interface TasksContextData {
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (task: Task) => void
  checkTask: (task: Task) => void
}

interface TasksProviderProps {
  children: React.ReactNode
}

const TasksContext = createContext({} as TasksContextData)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState([] as Task[])

  function addTask(newTask: Task) {
    setTasks(state => [...tasks, newTask])
  }

  function removeTask(taskToRemove: Task) {
    const updatedTasks = tasks.filter(task => task.id !== taskToRemove.id)
    setTasks(updatedTasks)
  }

  function checkTask(taskToComplete: Task) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskToComplete.id) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, checkTask }}>
      {children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TasksContext)

  if (!context) {
    throw new Error('useTasks error')
  }

  return context
}
