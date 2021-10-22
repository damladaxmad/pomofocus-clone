import React, {useState} from "react";
import { Button } from "@mui/material";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const Countdown = (props) => {
  const [ticking, setTicking] = useState(false)
  const [minutes, setMinutes] = useState("25")
  const [seconds, setSeconds] = useState("0")
  const [buttonLabel, setButtonLabel] = useState("Start")
  const startingMinutes = 25;
  let time = startingMinutes * 60;
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

  const [pomoBack, setPomoBack] = useState("#BC5753")
  const [shortBack, setShortBack] = useState("")
  const [longBack, setLongBack] = useState("")
  const [countBack, setCountBack] = useState("#DD6662")
  const [buttonColor, setButtonColor] = useState("#D95550")

  const shortClick = () =>{
    setPomoBack("")
    setShortBack("#508588")
    setLongBack("")
    props.onSwitch({
      pageColor: "#4C9195",
    headerColor: "#70A7AA",
  taskButtonColor: "#448285",
taskIconColor: "#70A7AA"})
    setCountBack("#5E9CA0")
    setButtonColor("#4C9195")
    
  }
  const pomoClick = () =>{
    setPomoBack("#BC5753")
    setShortBack("")
    setLongBack("")
    props.onSwitch({
      pageColor: "#D95550",
    headerColor: "#E17773",
  taskButtonColor: "#D95550",
taskIconColor: "#E17773"})
    setCountBack("#DD6662")
    setButtonColor("#D95550")
  }
  const longClick = () =>{
    setPomoBack("")
    setShortBack("")
    setLongBack("#4B7592")
    props.onSwitch({
      pageColor: "#457CA3",
    headerColor: "#6A96B6",
  taskButtonColor: "#3D6F92",
taskIconColor: "#6A96B6"})
    setCountBack("#5889AC")
    setButtonColor("#3D6F92")
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
    padding: "5px 10px", borderRadius: "8px"}} onClick = {shortClick}> Short Break </div> <div
    style = {{backgroundColor: longBack,
    padding: "5px 10px", borderRadius: "8px"}} onClick = {longClick}> Long Break </div>
      </div>
      <p style = {{ fontSize: "120px", fontWeight: "bolder",
    padding: "0px", margin: "10px 0px", color: "white"}}>{minutes}:{seconds <10 ? adjuster : null}{seconds}</p>
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
