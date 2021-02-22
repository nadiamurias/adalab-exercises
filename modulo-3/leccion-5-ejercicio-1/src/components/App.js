import React from "react";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.F = this.F.bind(this);
    this.state = { value: "" };
  }
  F(Newvalue) {
    this.setState({ value: Newvalue });
  }
  render() {
    return (
      <form>
        <Form F={this.F} />
        <p>{this.state.value}</p>
      </form>
    );
  }
}
export default App;
