import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
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
      <Contact />
    </div>
  );
}

export default App;
