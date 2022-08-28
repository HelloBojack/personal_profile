import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
