import TableRow from './TableRow';
import './Table.css';

export default function Table({ tableData }) {
  console.log(tableData);
  return (
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((row) => (
            <TableRow
              key={row.year}
              data={row}
            />
          ))}
      </tbody>
    </table>
  );
}
