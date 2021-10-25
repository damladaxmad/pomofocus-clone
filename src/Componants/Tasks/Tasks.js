import React, { useState } from "react"
import { BiDotsVertical } from 'react-icons/bi';
import { RiAddCircleFill } from 'react-icons/ri';
import {Button} from "@mui/material"
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = (props) =>{
    const [modal, setModal] = useState(false)

    const addTask = () =>{
        setModal(true)
    }

    const cancelModalHandler = () =>{
        setModal(false)
    }
    const saveModalHandler = () =>{
        setModal(false)
    }
    let iconColor = props.colors.iconColor
    return <div style = {{color: "white"}}>
      <p style = {{margin: "5px auto", color: "#EFBBB9"}}> #1 </p>
      <p style = {{margin: "3px auto", fontSize: "20px"}}> Time to focus! </p>
      <div style = {{
          display: "flex",
          width: "38%", padding: "15px",
          margin: "auto", color: "white",
          justifyContent: "space-between",
          fontWeight: "bold",
          fontSize: "20px", borderBottom: "2px solid #EFBBB9"
      }}> <p style = {{margin: "0px"}}> Tasks</p> <BiDotsVertical style = {{
      padding: "5px", backgroundColor: iconColor, borderRadius: "5px",
      cursor: "pointer", }}/> </div>
      <TaskItem/>
      {modal && <AddTask onCancel = {cancelModalHandler} onSave = {saveModalHandler}/>}
      <Button variant = "contained" disableRipple = {true}
      startIcon = {<RiAddCircleFill/>}
      style = {{
          width: "40%", border: "2px dotted grey",
          backgroundColor: props.colors.tasksColor, marginBottom: "15px",
          padding: "15px 30px", 

      }} onClick = {addTask}> Add Task </Button>
    </div>
}

export default Tasks;