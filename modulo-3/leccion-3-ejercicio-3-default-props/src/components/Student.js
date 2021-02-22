import React from "react";

class Student extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.name}</h2>
        <p>{this.props.age}</p>
        <p>{this.props.promo}</p>
      </li>
    );
  }
}

export default Student;
