import React, { useState } from "react";

const Age = (props) => {
  return (
    <div>
      <p>Hoy tengo {setAge}años de edad</p>
      <button type="button" onClick={handleAge}>
        Hazme más viejo
      </button>
    </div>
  );
};
export default Age;
