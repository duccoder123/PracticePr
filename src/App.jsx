import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputValid = userInput.duration > 0;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      console.log(prevUserInput);
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
