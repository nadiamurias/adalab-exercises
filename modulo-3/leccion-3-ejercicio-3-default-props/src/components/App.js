import React from "react";
import StudentList from "./StudentList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Listado de estudiantes:</h1>
        <StudentList />
      </div>
    );
  }
}

export default App;
