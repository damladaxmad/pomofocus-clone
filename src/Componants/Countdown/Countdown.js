import React, {useState} from "react";
import { Button } from "@mui/material";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import {useDispatch} from "react-redux"
import { useSelector } from "react-redux";

const Countdown = (props) => {
  const dispacth = useDispatch()
  const countBack = useSelector(state => state.colorStore.countBack)
  const buttonColor = useSelector(state => state.colorStore.buttonColor)
  const {pomoBack, shortBack, longBack} = useSelector(state => state.colorStore)
  const minutes = useSelector(state => state.timerStore.minutes)
  const [ticking, setTicking] = useState(false)
  const [seconds, setSeconds] = useState("0")
  const [buttonLabel, setButtonLabel] = useState("Start")
  // const startingMinutes = 25;
  // let time = startingMinutes * 60;
  let adjuster = 0
  // const calcTime = () => {
  //   setMinutes(Math.floor(time/60))
  //   setSeconds(time % 60)
  //   time--;
  // }
  // const timerFunction = () =>{
  //   if (!ticking){
  //    var refresh = setInterval(calcTime, 1000)
  //    setTicking(true)
  //   }
  //   setButtonLabel("Stop")
  //   if (ticking) {
  //     clearInterval(refresh)
  //   }   
  // }

  // This section is switching between pomo and breaks

  const shortClick = () =>{
    dispacth({type: "shortBreak"})    
  }
  const pomoClick = () =>{
    dispacth({type: "pomodoro"})
  }
  const longClick = () =>{
    dispacth({type: "longBreak"})
  }

  return (
    <div
      style={{
        backgroundColor: countBack, width: "35%",
        margin: "40px auto", marginBottom: "10px",
        padding: "20px", borderRadius: "8px"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "10px",
    color: "white", cursor: "pointer" }}>
        <div style = {{backgroundColor: pomoBack,
    padding: "5px 10px", borderRadius: "8px",
    fontWeight: "bold"}} onClick = {pomoClick}> Pomodoro </div> <div 
    style = {{backgroundColor: shortBack,
    padding: "5px 10px", borderRadius: "8px"}} onClick = {shortClick}>
      Short Break </div> 
      <div style = {{backgroundColor: longBack,
    padding: "5px 10px", borderRadius: "8px"}} onClick = {longClick}>
      Long Break </div>
      </div>
      <p style = {{ fontSize: "120px", fontWeight: "bolder",
    padding: "0px", margin: "10px 0px", color: "white"}}>
      {minutes}:{seconds <10 ? adjuster : null}{seconds}</p>
      <Button disableRipple = {true} variant="contained" style = {{
          width: "200px", backgroundColor: "#FFFFFF",
          color: buttonColor, padding: "8px", fontWeight: "bold",
          fontSize: "24px", borderBottom: "5px solid #EBEBEB"
      }} >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default Countdown;
