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
import ScrollToTop from "./Utils/scrollToTop";

//Pages (Presentational Components)
import NotFound from "./Pages/Fallbacks/404";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Disclaimer from "./Pages/Disclaimer";
import TermsOfUse from "./Pages/TermsOfUse";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

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
          <Route path="/disclaimer" element={<Disclaimer/>}/>
          <Route path="/terms-of-use" element={<TermsOfUse/>}/>v
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Route>
        <Route path="/">
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </RootErrorBoundary>
    </>
  );
}

export default App;
