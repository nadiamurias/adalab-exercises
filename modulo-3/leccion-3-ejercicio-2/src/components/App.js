import React from "react";
import HalfPage from "./HalfPage";
import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HalfPage>
          <h1>Soy la caja de la izquierda</h1>
          <p>Estoy a la izquierda</p>
        </HalfPage>
        <HalfPage>
          <h1>Soy la caja de la derecha</h1>
          <p>Estoy a la derecha</p>
        </HalfPage>
      </div>
    );
  }
}
export default App;
