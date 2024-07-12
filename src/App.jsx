import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Ghest from "./components/Ghest/Ghest";
import HomeHeader from "./components/Home/HomeHeader";
import GhestHeader from "./components/Ghest/GhestHeader";

function App() {
  const currentUser = false;

  return (
    <>
      {currentUser ? <HomeHeader /> : <GhestHeader />}
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/ghest" element={<Ghest />} />}
        <Route
          path="*"
          element={<Navigate to={!currentUser ? "/ghest" : "/"} />}
        />
      </Routes>
    </>
  );
}

export default App;
