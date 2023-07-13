import StandardLayout from "../components/common/Layouts/StandardLayout.native";
import StyledText from "../components/common/Text/StyledText.native";
import CustomPieChart from "../components/charts/CustomPieChart.native";
import ScrollableList from "../components/common/List/ScrollableList";
import Spacing from "../components/common/Spacing.native";
import { mockPieData1, mockPieData2 } from "../components/charts/data/mockData.native";

const Charts = () => {
  return (
    <StandardLayout>
      <StyledText>Charts</StyledText>
      <Spacing height={20} />
      <ScrollableList>
        <CustomPieChart isDonut={true} data={mockPieData1} />
        <Spacing height={40} />
        <CustomPieChart data={mockPieData2} />
      </ScrollableList>
    </StandardLayout>
  );
};

export default Charts;