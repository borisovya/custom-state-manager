import React, {useState} from 'react'

export type Task = {
    id: number
    text: string
    isDone: boolean
}

export const updateTask = (tasks: Task[], id: number, text: string): Task[] =>
    tasks.map(todo => ({
        ...todo,
        text: todo.id === id ? text : todo.text,
    }))

export const toggleTask = (tasks: Task[], id: number): Task[] =>
    tasks.map(task => ({
        ...task,
        isDone: task.id === id ? !task.isDone : task.isDone,
    }))

export const removeTask = (tasks: Task[], id: number): Task[] =>
    tasks.filter(task => task.id !== id)

export const addTask = (tasks: Task[], text: string): Task[] => [
    ...tasks,
    {
        id: Math.max(0, Math.max(...tasks.map(({id}) => id))) + 1,
        text,
        isDone: false,
    },
]

 const useTasks = (initialState: Task[])=>{
     const [tasks, setTasks] = React.useState<Task[]>(initialState)
     const [newTask, setNewTask] = useState('')
     return {
         tasks,
         newTask,
         setNewTask,
         addTask() {
             setTasks(t => addTask(t, newTask))
             setNewTask('')
         },
         updateTask (id: number, text: string) {
             setTasks(t => updateTask(t, id, text))
         },
         toggleTask(id: number) {
             setTasks(t => toggleTask(t, id))
         },
         removeTask (id: number) {
             setTasks(t => removeTask(t, id))
         },
         loadTasks (uploadingTasks: Task[]) {
             setTasks(uploadingTasks)
         }
     }
 }

 type UseTasksType = ReturnType<typeof useTasks>

const TaskContext = React.createContext<UseTasksType >({} as UseTasksType)

export const useTaskContext = () => React.useContext(TaskContext)

export const TaskProvider = ({children}: { children: React.ReactNode }) => (
    <TaskContext.Provider value={useTasks([])}>
        {children}
    </TaskContext.Provider>
)



