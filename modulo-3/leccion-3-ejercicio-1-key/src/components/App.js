import React from "react";

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    const result = students.filter((student) => student.promo === "B");

    const studentsList = result.map((student, index) => (
      <li key={index}>
        <h2>Nombre: {student.name}</h2>
        <p>Edad: {student.age}</p>
      </li>
    ));

    return (
      <div>
        <h1>Listado de estudiantes:</h1>
        <ul>{studentsList}</ul>
      </div>
    );
  }
}
Li.defaultProps = {};

export default App;
