import { createStore } from "redux";

const colorStore = {
  pageColor: "#D95550",
  headerColor: "#E17773",
  taskButtonColor: "#D95550",
  taskIconColor: "#E17773",
  countBack: "#DD6662",
  buttonColor: "#D95550",
  pomoBack: "#BC5753",
  shortBack: "",
  longBack: "",
};

const timerStore = {
  minutes: "25"
}

const reducer = (state = { colorStore: colorStore, timerStore: timerStore }, action) => {
  if (action.type === "shortBreak") {
    return {
      ...state,
      colorStore: {
        pageColor: "#4C9195",
        headerColor: "#70A7AA",
        taskButtonColor: "#448285",
        taskIconColor: "#70A7AA",
        countBack: "#5E9CA0",
        buttonColor: "#4C9195",
        pomoBack: "",
        shortBack: "#508588",
        longBack: "",
      },
      timerStore: {
        minutes: "05"
      }
    };
  }
  if (action.type === "longBreak") {
    return {
      ...state,
      colorStore: {
        pageColor: "#457CA3",
        headerColor: "#6A96B6",
        taskButtonColor: "#3D6F92",
        taskIconColor: "#6A96B6",
        countBack: "#5889AC",
        buttonColor: "#3D6F92",
        pomoBack: "",
        shortBack: "",
        longBack: "#4B7592",
      },
      timerStore: {
        minutes: "15"
      }
    };
  }
  if (action.type === "pomodoro") {
    return {
      ...state,
      colorStore: {
        pageColor: "#D95550",
        headerColor: "#E17773",
        taskButtonColor: "#D95550",
        taskIconColor: "#E17773",
        countBack: "#DD6662",
        buttonColor: "#D95550",
        pomoBack: "#BC5753",
        shortBack: "",
        longBack: "",
      },
      timerStore: {
        minutes: "25"
      }
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
