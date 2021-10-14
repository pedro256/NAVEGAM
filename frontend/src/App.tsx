import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Routes from "./routes";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
