import React from "react";
import { Button } from "@mui/material";

const Countdown = () => {
  return (
    <div
      style={{
        backgroundColor: "#DD6662",
        width: "35%",
        margin: "40px auto", marginBottom: "10px",
        padding: "20px",
        borderRadius: "8px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "10px",
    color: "white", cursor: "pointer" }}>
        <div style = {{backgroundColor: "#BC5753",
    padding: "5px 10px", borderRadius: "8px",
    fontWeight: "bold"}}> Pomodoro </div> <div 
    style = {{backgroundColor: "",
    padding: "5px 10px", borderRadius: "8px"}}> Short Break </div> <div
    style = {{backgroundColor: "",
    padding: "5px 10px", borderRadius: "8px"}}> Long Break </div>
      </div>
      <p style = {{ fontSize: "120px", fontWeight: "bolder",
    padding: "0px", margin: "10px 0px", color: "white"}}>25:00</p>
      <Button disableRipple = {true} variant="contained" style = {{
          width: "200px", backgroundColor: "#FFFFFF",
          color: "#D95550", padding: "8px", fontWeight: "bold",
          fontSize: "24px", borderBottom: "5px solid #EBEBEB"
      }}>
        Start
      </Button>
    </div>
  );
};

export default Countdown;
