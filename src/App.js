import { useState } from "react";
import "./App.css";
import Countdown from "./Componants/Countdown/Countdown";
import Header from "./Componants/Header/Header";
import Tasks from "./Componants/Tasks/Tasks";
import { useSelector } from "react-redux"
function App() {
  const pageColor = useSelector(state => state.colorStore.pageColor)
  const colors = useSelector(state => state.colorStore)
//   const [colors, setColors] = useState({
//     headerColor: "#E17773",
//   taskButtonColor: "#D95550",
// taskIconColor: "#E17773"
//   })

  // const switchHandler = ({pageColor, headerColor, taskButtonColor, taskIconColor}) =>{
  //   setPageColor(pageColor)
  //   setColors({
  //     headerColor: headerColor,
  //   taskButtonColor: taskButtonColor,
  //   taskIconColor: taskIconColor
  //   })
  // }
  return (
    <div className="App" style = {{
      background: pageColor
    }}>
      <Header colors = {{headerColor: colors.headerColor}}/>
      <Countdown/>
      <Tasks colors = {{tasksColor: colors.taskButtonColor, iconColor: colors.taskIconColor}}/>
    </div>
  );
}

export default App;
