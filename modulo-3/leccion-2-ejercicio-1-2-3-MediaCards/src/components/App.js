import React from "react";
import logo from "../logo.svg";
import MediaCard from "./MediaCard";
import "../App.scss";

class App extends React.Component {
  render() {
    return (
      <MediaCard
        username="Sofia Murias"
        date="Martes, 16 de Febrero de 2021"
        image={logo}
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
        repellendus sapiente sint ut officia molestiae incidunt facere magnam
        minus, aliquid eos animi, soluta sequi harum? Odio non in ducimus
        aspernatur. Rerum repellendus sapiente sint ut officia molestiae
        incidunt facere magnam minus, aliquid eos animi, soluta sequi harum?
        Odio non in ducimus aspernatur..."
        likes="37"
      />
    );
  }
}

export default App;
