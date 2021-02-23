import React, { useState } from "react";
import Age from "./Age";
import Gift from "./Gift";

const App = () => {
  const [age, setAge] = useState(20);
  const [gift, setGift] = useState(1);

  const handleAge = () => {
    setAge(age + 1);
  };
  const handleGift = () => {
    setGift(gift + 1);
  };
  return (
    <div>
      <Age getAge={handleAge} age={age} />
      <Gift getGift={handleGift} gift={gift} />
    </div>
  );
};
export default App;
