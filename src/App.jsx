import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import Ghest from "./components/Ghest/Ghest";
import HomeHeader from "./components/Home/HomeHeader";
import GhestHeader from "./components/Ghest/GhestHeader";

function App() {
  const auth = false;

  return (
    <>
      {auth ? <HomeHeader /> : <GhestHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ghest" element={<Ghest />} />
      </Routes>
    </>
  );
}

export default App;
