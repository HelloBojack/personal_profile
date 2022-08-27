import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="h-[10000px] w-100"></div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
