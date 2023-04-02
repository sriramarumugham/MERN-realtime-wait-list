import { Route, Routes } from "react-router-dom";
import Coupons from "./components/Coupons";
import JoinRoom from "./components/JoinRoom";
import CouponsPages from "./pages/DiscoundsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";

function App() {
  return (
    // <div className="flex flex-col   justify-center items-center h-[500vh]  w-[100vw] box-border">
    <div className="flex    justify-center items-center h-[100vh] overflow-hidden  w-[100vw] box-border">
      <Routes>
        <Route path={'/' } element={<LoginPage/>}/>
        <Route path={'/home' } element={<HomePage/>}/>

      </Routes>
      {/* <HomePage/> */}
      {/* <CouponsPages/> */}
      {/* <JoinRoom /> */}
      {/* <Coupons/> */}

      <ToastContainer />
    </div>
  );
}

export default App;
