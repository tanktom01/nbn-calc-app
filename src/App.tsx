import "@cloudscape-design/global-styles/index.css";
import "typeface-open-sans";
import NavBar from "./components/NavBar";
import Stage1 from "./components/Stage1/Stage1";
import Stage2 from "./components/Stage2";
import Stage3 from "./components/Stage3";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stage1 />
      <Stage2 />
      <Stage3 />
    </>
  );
}

export default App;
