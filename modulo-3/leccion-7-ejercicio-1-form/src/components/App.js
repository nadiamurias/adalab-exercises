import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
    };

    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleName(ev) {
    this.setState({ name: ev.target.value });
  }

  handleDescription(ev) {
    this.setState({ description: ev.target.value });
  }

  handleLanguage(ev) {
    this.setState({ language: ev.target.value });
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <label htmlFor="description">Descripción:</label>
          <textarea
            value={this.state.description}
            onChange={this.handleDescription}
          />
          <label htmlFor="language">Idioma:</label>
          <select onChange={this.handleLanguage} value={this.state.language}>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="pt">Portugués</option>
          </select>
        </form>
        <div>
          <p>El nombre es: {this.state.name}</p>
          <p>La descripción es: {this.state.description}</p>
          <p>El idioma es: {this.state.language}</p>
        </div>
      </>
    );
  }
}
export default App;
