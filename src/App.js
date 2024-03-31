import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./companents/Footer";
import Header from "./companents/Header";
import Hero from "./companents/Hero";
import Drivers from "./companents/Drivers";
import Results from "./companents/Results";
import Teams from "./companents/Teams";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Drivers />} />
        <Route path="/results" element={<Results />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
