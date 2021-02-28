import React from "react";
import "../stylesheets/App.scss";
import Data from "../data/data.json";
import ClasList from "../components/ClubList";

const App = () => {
  return (
    <div className="page">
      <ClasList data={Data} />
    </div>
  );
};
export default App;
