import { useState } from "react";
import Navbar from "./components/layouts/Navbar";
import Banner from "./components/layouts/Banner";
import Collection from "./components/layouts/Collection";
import BestSeller from "./components/layouts/BestSeller";
import History from "./components/layouts/History";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Collection />
      <History />
      <BestSeller />
    </>
  );
}

export default App;
