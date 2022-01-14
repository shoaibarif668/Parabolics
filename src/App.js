import React from "react";
import { Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./Assets/Styles/styles.css"

//Utils & Routes
import PublicRoute from "./Layouts/PublicRoute"
import RootErrorBoundary from "./Utils/rootErrorBoundary";

//Pages (Presentational Components)
import NotFound from "./Pages/Fallbacks/404";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import ScrollToTop from "./Utils/scrollToTop";

function App() {
  return (
    <>
    <ToastContainer/>
    <ScrollToTop/>
    <RootErrorBoundary>
      <Routes>
        <Route path="/" element={<PublicRoute/>}>
          <Route index element={<Home/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Route>
        
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </RootErrorBoundary>
    </>
  );
}

export default App;
