import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { JSX } from "@emotion/react/jsx-runtime";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
