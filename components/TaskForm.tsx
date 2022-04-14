import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
    >
      <TextField
        sx={{ background: "white", marginRight: "5px" }}
        id="outlined-basic"
        label="New Task"
        variant="outlined"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <Button
        variant="outlined"
        sx={{ background: "white", color: "black" }}
        onClick={handleSubmit}
      >
        submit
      </Button>
    </Container>
  );
}

export default TaskForm;
