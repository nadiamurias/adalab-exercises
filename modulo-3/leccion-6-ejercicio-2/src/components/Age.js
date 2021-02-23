import React from "react";

const Age = (props) => {
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
