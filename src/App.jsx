import Login from "./assets/pages/Login"
import Register from "./assets/pages/Register"
import ImageUpload from "./assets/pages/ImageUpload"
import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./assets/pages/ForgotPassword"
import Homepage from "./assets/pages/Homepage"
import ResetPassword from "./assets/pages/ResetPassword"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/compress" element={<ImageUpload />} />
      </Routes>
    </>
  )
}

export default App