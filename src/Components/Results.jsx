import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ input }) {
  const resultData = calculateInvestmentResults(input);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterst =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
          const totalAmoutInvested = yearData.valueEndOfYear - totalInterst;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterst)}</td>
              <td>{formatter.format(totalAmoutInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
