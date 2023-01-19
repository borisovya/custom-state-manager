import * as React from 'react'

import { Button, Input, Grid } from '@chakra-ui/react'


import {useTaskContext} from "../store";

function TodoAdd() {
    const {setNewTask, addTask} = useTaskContext()

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input onChange={(e)=>setNewTask(e.target.value)} placeholder="New todo" />
      <Button onClick={()=>{
          addTask()
      }}>
          Add Task</Button>
    </Grid>
  )
}

export default TodoAdd
