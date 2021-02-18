import React from "react";

class Item extends React.Component {
  render() {
    return (
      <>
        {" "}
        {/* a esto se le llama fragment */}
        <li>Uno</li>
        <li>Dos</li>
      </>
    );
  }
}
export default Item;
