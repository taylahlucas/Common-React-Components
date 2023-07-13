import StandardLayout from '../components/common/Layouts/StandardLayout.native';
import LoadingCircle from '../components/animations/Loading/LoadingCircle.native';
import StyledText from '../components/common/Text/StyledText.native';
import ScrollableList from '../components/common/List/ScrollableList';
import Spacing from '../components/common/Spacing.native';

const Loading = () => {
  return (
    <StandardLayout>
      <StyledText>Loading Animation</StyledText>
      <Spacing height={20} />
      <ScrollableList>
        <LoadingCircle />
      </ScrollableList>
    </StandardLayout>
  );
};

export default Loading;