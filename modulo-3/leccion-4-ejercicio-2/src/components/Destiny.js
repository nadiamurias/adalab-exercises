import React from "react";

function Destiny(props) {
  const handleChange = (ev) => {
    alert(`Tu destino es viajar a ${ev.target.value}`);
  };
  return (
    <form>
      <select name="" id="" onChange={handleChange}>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sidney">Sidney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    </form>
  );
}
export default Destiny;
