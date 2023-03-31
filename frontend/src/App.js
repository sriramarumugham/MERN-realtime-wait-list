import Coupons from "./components/Coupons";
import JoinRoom from "./components/JoinRoom";
import CouponsPages from "./pages/DiscoundsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    // <div className="flex flex-col   justify-center items-center h-[500vh]  w-[100vw] box-border">
    <div className="flex    justify-center items-center h-[100vh] overflow-hidden  w-[100vw] box-border">
      <LoginPage />
      {/* <HomePage/> */}
      {/* <CouponsPages/> */}
      {/* <JoinRoom /> */}
      {/* <Coupons/> */}
    </div>
  );
}

export default App;
