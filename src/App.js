import React, {useState} from "react";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import DaysCompleted from "./Components/DaysCompleted";
import Header from "./Components/Header";
import CheckinComment from "./Components/CheckinComment";
import GlobalStyles from "./config/GlobalStyles";

function App() {
    const checkins = [
        {date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 1},
        {date: "Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 15},
        {date: "Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 8},
        {date: "Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 2},
        {date: "Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
        {date: "Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 12},
        {date: "Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 19},
        {date: "Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 10},
        {date: "Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 15},
        {date: "Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 6}, 
        {date: "Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
        {date: "Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
        {date: "Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20},
        {date: "Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20}
    ];

    const days = checkins.length;

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(40);
    const [count3, setCount3] = useState(0);
    
    const handleClickAdd = e => {
      e.preventDefault();
      
      setCount(count+1);
    };
  
    const handleClickDec2 = e => {
      e.preventDefault();
  
      if(count2 > 0)
        setCount2(count2-1);
    };
  
    const handleTimes = e => {
      e.preventDefault();
  
      setCount3(count * count2);
    };

    return (
        <div>
        <ThemeProvider theme={theme}>
          <Header />
          <GlobalStyles />
  
          <h2>Counter 1: {count}</h2>
          <h2>Counter 2: {count2}</h2>
          <h2>Counter 3: {count3}</h2>
          <button onClick={handleClickAdd}>Increase</button>
          <button onClick={handleClickDec2}>Decrease</button>
          <button onClick={handleTimes}>Times</button>
  
          
  
          <DaysCompleted days={15} checkins={checkins}>
            {" "}
          </DaysCompleted>
         
         <CheckinComment />
  
        </ThemeProvider>
      </div>
    );
};

export default App;