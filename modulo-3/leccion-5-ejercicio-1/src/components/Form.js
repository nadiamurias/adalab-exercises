import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.props.F(ev.target.value);
  }
  render() {
    return (
      <label>
        Escribe aquí:
        <input type="text" onChange={this.handleChange} />
      </label>
    );
  }
}
export default Form;
