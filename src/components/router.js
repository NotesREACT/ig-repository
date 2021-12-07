import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";
import HomeIG from "./homeIG/homeIG";


function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/home" element={<HomeIG />}/>
            </Routes>
        </BrowserRouter>
    )
}



export default Router;