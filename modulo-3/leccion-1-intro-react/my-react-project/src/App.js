import React from "react";
// import logo from "../images/profile-pic.jpg";
import "./App.scss";
const headerTitle = <h1 className="App--header-name-title">Jech Fernández</h1>;
const headerText = (
  <p className="App--header-name-text">Martes 16 de febrero, 2021</p>
);
const mainText = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);
function MediaCard() {
  const section = (
    <section className="App--header-name">
      {headerTitle}
      {headerText}
    </section>
  );
  return (
    <div className="App">
      <section className="App--card">
        <header className="App--header">
          {/* <img src={logo} className="App--header-img" alt="logo" /> */}
          {section}
        </header>
        <main className="App--main">{mainText}</main>
        <footer className="App--footer">
          <p>Leer más...</p>
          <p>
            37 <i className="fas fa-heart App--footer-icon"></i>
          </p>
        </footer>
      </section>
    </div>
  );
}
export default MediaCard;
