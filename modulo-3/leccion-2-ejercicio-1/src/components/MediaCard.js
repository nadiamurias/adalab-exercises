import React from "react";
import logo from "../logo.svg";
import "../App.scss";

class MediaCard extends React.Component {
  render() {
    const header = (
      <header className="header">
        <img src={this.props.image} className="logo" alt="logo" />
        <div className="header-text">
          <h1 className="name">{this.props.username}</h1>
          <h2 className="date">{this.props.date}</h2>
        </div>
      </header>
    );
    const main = (
      <main className="main">
        <p className="main-text">{this.props.text}</p>
      </main>
    );
    const footer = (
      <footer className="footer">
        <a className="read-more">Leer más...</a>
        <p className="likes">
          {this.props.likes} <i className="fas fa-heart"></i>
        </p>
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

export default MediaCard;
