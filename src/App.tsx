import * as React from 'react'

import {ChakraProvider, Box, theme} from '@chakra-ui/react'

import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import TopBar from './components/TopBar'
import {TaskProvider} from "todo-state-manager-react";

export function App() {

    return (
        <ChakraProvider theme={theme}>
            <TaskProvider>

                <Box maxWidth="8xl" margin="auto" p={5}>
                    <TopBar />
                    <TodoList />
                    <TodoAdd />
                </Box>

            </TaskProvider>
        </ChakraProvider>
    )
}
