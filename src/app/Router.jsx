import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "../pages/Login"
import Tasks from "../pages/Tasks"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Tasks" element={<Tasks />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router