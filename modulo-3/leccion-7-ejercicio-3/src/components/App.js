import React from "react";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      language: "",
      genres: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleGenres = this.handleGenres.bind(this);
  }

  //refactorizar el formulario
  handleInput(ev) {
    const key = ev.target.name;
    const newState = {
      [key]: ev.target.value,
    };
    this.setState(newState);
  }

  handleGenres(ev) {}

  renderLanguage() {
    // traduzco los lenguajes que tengo en el estado a lo que quiere ver la usuaria
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
          <h3>Género:</h3>
          <label>
            Comedia
            <input
              type="checkbox"
              name="genres"
              value="comedy"
              onChange={handleGenres}
            />
          </label>
          <label>
            Drama
            <input
              type="checkbox"
              name="genres"
              value="drama"
              onChange={handleGenres}
            />
          </label>
          <label>
            Fantasía
            <input
              type="checkbox"
              name="genres"
              value="fantasy"
              onChange={handleGenres}
            />
          </label>
          <label>
            Acción
            <input
              type="checkbox"
              name="genres"
              value="action"
              onChange={handleGenres}
            />
          </label>
          <label>
            Familia
            <input
              type="checkbox"
              name="genres"
              value="family"
              onChange={handleGenres}
            />
          </label>
          <label>
            Terror
            <input
              type="checkbox"
              name="genres"
              value="horror"
              onChange={handleGenres}
            />
          </label>
        </form>
        <div className="preview">
          <p>El nombre es: {this.state.name}</p>
          <p>La descripción es: {this.state.description}</p>
          <p>El idioma es: {this.renderLanguage()}</p>
          <p>El género es: {this.state.genres}</p>
        </div>
      </>
    );
  }
}
export default App;
