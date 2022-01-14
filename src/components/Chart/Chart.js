import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const totalExpenseAmount = props.dataPoints
    .map((dataPoint) => dataPoint.value)
    .reduce((sum, cur) => {
      return (sum += cur);
    });

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalExpenseAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
