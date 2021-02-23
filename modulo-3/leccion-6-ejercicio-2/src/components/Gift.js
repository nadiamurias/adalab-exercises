import React from "react";

const Gift = (props) => {
  return (
    <div>
      <p>Tengo {props.gift} regalo</p>
      <button type="button" onClick={props.getGift}>
        Dame regalos
      </button>
    </div>
  );
};
export default Gift;
