export default function TableRow({ data }) {
  return (
    <tr>
      <td>{data.year}</td>
      <td>{data.yearlySavings}</td>
      <td>{data.yearlyInterest}</td>
      <td>{data.totalInterest}</td>
      <td>{data.totalInvested}</td>
    </tr>
  );
}
