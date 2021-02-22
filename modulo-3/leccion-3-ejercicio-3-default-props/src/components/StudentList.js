import React from "react";
import Student from "./Student";

class StudentList extends React.Component {
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
    }
    return (
        const studentsList = students.map((student, index) => {
        return (    
        <ul>
            <Student
                key={index}
                name={`Nombre: ${student.name}`}
                age={`Edad: ${student.age}`}
                promo={`Promo: ${student.promo}`}
            />
        </ul>
        )
        }
    );
        
};

export default StudentList;
