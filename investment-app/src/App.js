import { useState } from 'react';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Table from './components/table/Table';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function App() {
  const [tableData, setTableData] = useState([]);
  const calculateHandler = (userInput) => {
    const yearlyData = [];

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.durationYears;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        yearlySavings: formatter.format(currentSavings),
        totalInterest: formatter.format(yearlyInterest * (i + 1)),
        totalInvested: formatter.format(
          currentSavings + yearlyContribution * (i + 1)
        ),
      });
    }
    setTableData(yearlyData);
  };

  const onFormSubmit = (data) => {
    if (data) calculateHandler(data);
    else setTableData([]);
  };

  return (
    <div>
      <Header />
      <Form onSubmitData={onFormSubmit} />
      <Table tableData={tableData} />
    </div>
  );
}
