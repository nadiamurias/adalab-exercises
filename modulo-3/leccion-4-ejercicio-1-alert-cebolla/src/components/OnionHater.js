import React from "react";

function OnionHater(props) {
  const handleChange = (ev) => {
    if (ev.target.value.includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    }
  };
  return (
    <form>
      <textarea onChange={handleChange} />
    </form>
  );
}
export default OnionHater;
