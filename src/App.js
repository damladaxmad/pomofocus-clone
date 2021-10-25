import { useState } from "react";
import "./App.css";
import Countdown from "./Componants/Countdown/Countdown";
import Header from "./Componants/Header/Header";
import Tasks from "./Componants/Tasks/Tasks";
import { useSelector } from "react-redux"
function App() {
  const pageColor = useSelector(state => state.colorStore.pageColor)
  const colors = useSelector(state => state.colorStore)

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
