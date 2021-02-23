import React, { useState } from "react";
import "./Age";

const App = () => {
  const [age, setAge] = useState("20");

  const handleAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <Age getAge={} />
    </div>
  );
};
export default App;
