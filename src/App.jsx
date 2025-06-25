import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"
import {Dashboard,Member,Login, Developer} from "./pages"

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route path="" element={<Member/>} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />} >
          <Route path="" index element={<Login />} />
        </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App