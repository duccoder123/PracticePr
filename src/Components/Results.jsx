import { calculateInvestmentResults } from "../util/investment";
export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  return (
    <>
      <h1>Results...</h1>
    </>
  );
}
