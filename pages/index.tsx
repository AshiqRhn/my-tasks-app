import { Typography } from "@mui/material";
import { AnySrvRecord } from "dns";
import React, { useState } from "react";
import Task from "../components/Task";
import TaskForm from "../components/TaskForm";

export default function Home() {
  const [tasks, setTasks] = useState<any>([
    { text: "Meeting with boss at 10am", isCompleted: false },
    { text: "Quality check on New App", isCompleted: false },
    { text: "Price Negotiation with Victoria Inc.", isCompleted: false },
  ]); 

  const completeTask = (index: any) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    setTasks(newTasks);
  };

  const addTask = (text: any) => {
    const newTasks = [...tasks, { text }];
    setTasks({newTasks});
  };
  function removeTask(index: any): void {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks({newTasks});
  }

  return (
    <div
      style={{ 
        background: '#6ddce8',
        height: '100vh',
        padding: '25px',             
      }}
    > 
    <Typography variant="h4" align='center' 
    sx={{
      color: 'white',
      marginTop: '30px',
      paddingBottom: '20px',
      fontWeight: '15px'

    }}>
   
      My Tasks Today:
    </Typography>
      
        {tasks.map((task, index) => (        
          <Task                    
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}       

     
        <TaskForm addTask={addTask} />
      
    </div>
  );
}
