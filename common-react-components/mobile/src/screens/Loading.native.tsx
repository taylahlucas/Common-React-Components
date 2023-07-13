import StandardLayout from '../components/common/Layouts/StandardLayout.native';
import StyledText from '../components/common/Text/StyledText.native';
import ScrollableList from '../components/common/List/ScrollableList';
import Spacing from '../components/common/Spacing.native';
import LoadingCircle from '../components/animations/Loading/LoadingCircle.native';
import LoadingDots from '../components/animations/Loading/LoadingDots.native';

const Loading = () => {
  return (
    <StandardLayout>
      <StyledText>Loading Animation</StyledText>
      <Spacing height={20} />
      <ScrollableList>
        <LoadingCircle />
        <Spacing height={80} />
        <LoadingDots />
      </ScrollableList>
    </StandardLayout>
  );
};

export default Loading;