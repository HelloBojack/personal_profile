import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Project } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
