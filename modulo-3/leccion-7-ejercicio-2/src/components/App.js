import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    console.log(ev.target.name, ev.target.value);
    // const obj = {}
    // const key = ev.target.name
    // obj.description
    // obj[key]
    // const obj = {
    //   name: ev.target.value
    // }
    const key = ev.target.name;
    const newState = {
      [key]: ev.target.value,
    };
    this.setState(newState);
  }

  renderLanguage() {
    if (this.state.language === "es") {
      return "Español";
    } else if (this.state.language === "en") {
      return "Inglés";
    } else if (this.state.language === "pt") {
      return "Portugués";
    }
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input
            name="name"
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <label htmlFor="description">Descripción:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />
          <label htmlFor="language">Idioma:</label>
          <select
            name="language"
            onChange={this.handleInput}
            value={this.state.language}
          >
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="pt">Portugués</option>
          </select>
        </form>
        <div>
          <p>El nombre es: {this.state.name}</p>
          <p>La descripción es: {this.state.description}</p>
          <p>El idioma es: {this.renderLanguage()}</p>
        </div>
      </>
    );
  }
}
export default App;
