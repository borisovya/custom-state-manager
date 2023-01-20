import * as React from 'react'

import { Button, Input, Grid } from '@chakra-ui/react'
import {useTaskContext} from "todo-state-manager-react";

function AddTask() {
    const {setNewTask, addTask} = useTaskContext()

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input onChange={(e)=>setNewTask(e.target.value)} placeholder="New task" />
      <Button onClick={()=>{
          addTask()
      }}>
          Add Task</Button>
    </Grid>
  )
}

export default AddTask