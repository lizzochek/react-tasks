import ChartBar from './ChartBar';

import './Chart.css';

export default function Chart({ dataPoints }) {
  const values = dataPoints.map((el) => el.value);
  const totalMax = Math.max(...values);

  return (
    <div className='chart'>
      {dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMax}
          label={point.label}
        />
      ))}
    </div>
  );
}
