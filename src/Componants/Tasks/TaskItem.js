import React from "react"
import { FaCheckCircle } from 'react-icons/fa'
import {List, ListItem, ListItemText, ListItemIcon} from "@mui/material"
import { BiDotsVertical } from 'react-icons/bi';

const TaskItem = () =>{
    return <div style = {{
        width: "39.9%", borderLeft: "7px solid black",
        backgroundColor: "white", margin: "10px auto",
         borderRadius: "5px", color: "black", cursor: "pointer",

    }}>
        <List>
            <ListItem style = {{fontSize: "24px", fontWeight: "bolder"}}>
                <ListItemIcon style = {{color: "#EBEBEB"}}>
                    <FaCheckCircle/> </ListItemIcon>
                <ListItemText > <p style = {{fontWeight: "bolder",
            margin: "0px"}}> Analyzing philosophecal stuff </p>
                     </ListItemText>
                     <ListItemIcon style = {{color: "#EBEBEB"}}>
                     <BiDotsVertical style = {{
      padding: "2px", backgroundColor: "white",
      borderRadius: "5px", cursor: "pointer",
      marginLeft: "40px", color: "#BBBBBB",
      border: "1px solid lightGrey"}}/> </ListItemIcon>
            </ListItem>
        </List>
    </div>
}

export default TaskItem;