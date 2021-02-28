import React, { useState } from "react";

const Age = () => {
  return (
    <div>
      <p>Hoy tengo {props.age}años de edad</p>
      <button type="button" onClick={props.getAge}>
        Hazme más viejo
      </button>
    </div>
  );
};
export default Age;
