// import SheepCounter from "./SheepCounter";
import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheeps: 0,
    };
    this.handleButton = this.handleButton.bind(this);
  }
  handleButton() {
    this.setState((prevState) => {
      return {
        sheeps: prevState.sheeps + 1,
      };
    });
  }
  render() {
    //pinto listado
    const result = [];
    for (let index = 0; index < this.state.sheeps; index++) {
      result.push(<li key={index}>Oveja</li>);
    }
    return (
      <div>
        <h1>Ovejas</h1>
        <h2>Número total de ovejas:{this.state.sheeps}</h2>
        <button onClick={this.handleButton}>Añadir ovejas</button>
        <h2>Listado de ovejas:</h2>
        <ul>{result}</ul>
      </div>
    );
  }
}

export default App;
