import React from "react";
// import logo from "./img/logo.svg";
import "./css/style.css";
import Header from "./components/header";
import Main from "./components/main";
import Features from "./components/features";
import Footer from "./components/footer";

import Calendar from "./components/calendar";
import Details from "./components/details";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
      {/* <Details /> */}
      <Footer />
    </div>
  );
}

export default App;
