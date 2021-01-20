import React from "react";
import { TaskType } from '../../interfaces/TaskType'

interface Proos
{
  task: TaskType
}
export default function Index (props: Proos) {
  return (
    <div className='task'>
      { props.task.name }
    </div>
  )
}
