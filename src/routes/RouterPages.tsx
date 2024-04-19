import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { CreateEvents } from "../pages/CreateEvent"
import { MyAccount } from "../pages/MyAccount"

export default function RouterPages(){

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-event" element={<CreateEvents/>} />
        <Route path="/my-account" element={<MyAccount/>} />
      </Routes>
    </Router>
  )
}