import { Routes, Route, Navigate } from "react-router-dom";
import Home from './component/Home'
import { Login } from './component/Login/Login'
import { Toaster } from "react-hot-toast";
import { SignUp } from './component/Signup/SignUp'
import { useAuthContext } from "./context/authContext";
import Print from "./component/Print";
import AboutUsPage from "./component/AboutUs";
import Notications from "./component/Notications";

function App() {
  const { authUser } = useAuthContext();

  return (
    <>
    <div className="h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />}/>
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />}/>
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />}/>
        <Route path="/print" element={!authUser ? <Navigate to="/" /> : <Print />}/>
        <Route path="/aboutus" element={!authUser ? <Navigate to="/" /> : <AboutUsPage />}/>
        <Route path="/notifications" element={!authUser ? <Navigate to="/" /> : <Notications />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </div>
  </>
    
    )
}

export default App
