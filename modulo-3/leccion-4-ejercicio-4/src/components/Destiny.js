import React from "react";
import CityImage from "./CityImage";

let cityPhoto = "";

function Destiny(props) {
  const handleChange = (ev) => {
    cityPhoto = ev.target.value;
  };
  return (
    <div>
      <form>
        <select name="" id="" onChange={handleChange}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sidney">Sidney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
      </form>
      <CityImage city={cityPhoto} />
    </div>
  );
}
export default Destiny;
