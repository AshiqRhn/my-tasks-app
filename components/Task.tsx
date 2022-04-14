import { Button, Container } from "@mui/material";
import React from "react";

const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <Container
      sx={{
        textDecoration: task.isCompleted ? "line-through" : "",
        alignItems: "center",
        background: "#fff",
        borderRadius: "3px",
        boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.15)",
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "15px",
        padding: "3px 10px",
        width: "50vw",
        fontSize: "25px",
      }}
    >
      {task.text}

      <div>
        <Button
          variant="outlined"
          sx={{ color: "black", marginRight: "10px" }}
          onClick={() => completeTask(index)}
        >
          Complete
        </Button>

        <Button
          variant="outlined"
          sx={{ color: "black", marginRight: "10px" }}
          onClick={() => removeTask(index)}
        >
          x
        </Button>
      </div>
    </Container>
  );
};

export default Task;
