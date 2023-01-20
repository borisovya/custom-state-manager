import * as React from 'react'

import {Button, Checkbox, Flex, Heading, Input} from '@chakra-ui/react'
import {useTaskContext} from "todo-state-manager-react";


function TodoListItems() {

    const {tasks, updateTask, toggleTask, removeTask} = useTaskContext()

    return (
        <>
            {tasks.map((task: { id: number; text: string }) => (
                <Flex pt={2} key={task.id}>
                    <Checkbox onClick={() => {toggleTask( task.id)}} />
                    <Input mx={2} value={task.text} onChange={(e) => {
                        updateTask(task.id, e.currentTarget.value)
                    }}/>
                    <Button
                        onClick={() => { removeTask(task.id)}}
                    >
                        Delete</Button>
                </Flex>
            ))}
        </>
    )
}

function TodoList() {

    return (
        <>
            <Heading>Todo List</Heading>
            <TodoListItems/>
        </>
    )
}

export default TodoList
