import "./App.css";
import Countdown from "./Componants/Countdown/Countdown";
import Header from "./Componants/Header/Header";
import Tasks from "./Componants/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <Countdown />
      <Tasks />
    </div>
  );
}

export default App;
