import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};
