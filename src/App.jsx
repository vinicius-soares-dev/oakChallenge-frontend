import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import RegisterPage from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/register" element={<RegisterPage />} exact/>

        </Routes>
    </BrowserRouter>
  )
}

export default App;
