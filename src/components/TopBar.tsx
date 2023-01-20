import * as React from 'react'

import {Button, Grid} from '@chakra-ui/react'


import {ColorModeSwitcher} from './ColorModeSwitcher'
import {getData} from "./data";
import {useTaskContext} from "todo-state-manager-react";


function TopBar() {
    const context = useTaskContext()
    const {loadTasks} = context
    if (!context) {
        throw new Error("Error")
    }
    const onClickHandler = () => {
        loadTasks(getData())
    }
    return (
        <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
            <ColorModeSwitcher/>
            <Button onClick={onClickHandler}>Load</Button>
        </Grid>
    )
}

export default TopBar
