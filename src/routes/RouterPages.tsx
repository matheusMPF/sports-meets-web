import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { CreateEvents } from "../pages/CreateEvent"
import { MyAccount } from "../pages/MyAccount"
import { EventRoom } from "../pages/EventRoom"
import { MyEvents } from "../pages/MyEvents"
import { MyReviews } from "../pages/MyReviews"
import { Settings } from "../pages/Settings"
import { Support } from "../pages/Support"

export default function RouterPages(){

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-event" element={ <CreateEvents/> } />
        <Route path="/event-room" element={ <EventRoom /> } />
        <Route path="/my-account" element={ <MyAccount/> } />
        <Route path="/my-events" element={ <MyEvents/> } />
        <Route path="/my-reviews" element={ <MyReviews/> } />
        <Route path="/settings" element={ <Settings/> } />
        <Route path="/support" element={ <Support/> } />

      </Routes>
    </Router>

    // Tu e corno matheusz
  )
}