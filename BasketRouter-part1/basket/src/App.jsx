import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import DetailsPage from "./pages/DetailsPage";
import About from "./pages/Abouts/About";
import Navbar from "./pages/components/Navbar";
import { ROUTER } from "./constant/router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.Basket} element={<Basket />} />
        <Route path={ROUTER.DetailsPage + "/:id"} element={<DetailsPage />} />
        <Route path={ROUTER.About + "/*"} element={<About />} />
      </Routes>
    </>
  );
}

export default App;
