import React from "react";
import DaysCompleted from "./Components/DaysCompleted";
import "./index.css";
import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";

export default function App() {
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

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <DaysCompleted days={days} checkins={checkins}/>
            </ThemeProvider>
        </div>
    );
}