import { PieChart } from 'react-native-gifted-charts';

export interface ChartDataProps {
  value: number;
  color: string;
}

interface CustomPieChartProps {
  isDonut?: boolean;
  data: ChartDataProps[];
}
const CustomPieChart = ({ isDonut = false, data }: CustomPieChartProps) => {
  return (
    <PieChart
      donut={isDonut}
      data={data} 
      radius={80}
      focusOnPress
    />
  );
};

export default CustomPieChart;