import React from "react";
import logo from "./logo.svg";
import "./App.scss";

class App extends React.Component {
  render() {
    const header = (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="header-text">
          <h1 className="name">Nadia Murias</h1>
          <h2 className="date">Martes, 16 de Febrero de 2021</h2>
        </div>
      </header>
    );
    const main = (
      <main className="main">
        <p className="main-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          repellendus sapiente sint ut officia molestiae incidunt facere magnam
          minus, aliquid eos animi, soluta sequi harum? Odio non in ducimus
          aspernatur. Rerum repellendus sapiente sint ut officia molestiae
          incidunt facere magnam minus, aliquid eos animi, soluta sequi harum?
          Odio non in ducimus aspernatur...
        </p>
      </main>
    );
    const footer = (
      <footer className="footer">
        <a className="read-more">Leer más...</a>
        <span className="likes">
          37<i className="fas fa-heart"></i>
        </span>
      </footer>
    );
    const card = (
      <div className="card">
        {header} {main} {footer}
      </div>
    );
    const appRoot = <div className="App">{card}</div>;
    return appRoot;
  }
}

export default App;
