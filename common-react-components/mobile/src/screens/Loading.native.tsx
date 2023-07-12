import StandardLayout from '../components/common/Layouts/StandardLayout.native';
import textStyles from '../components/common/Text/TextStyles.native';
import LoadingCircle from '../components/animations/Loading/LoadingCircle.native';
import StyledText from '../components/common/Text/StyledText.native';
import ScrollableList from '../components/common/List/ScrollableList';

const Loading = () => {
  return (
    <StandardLayout>
      <ScrollableList>
        <StyledText style={textStyles.headerText}>Loading Animation</StyledText>
        <LoadingCircle />
      </ScrollableList>
    </StandardLayout>
  );
};

export default Loading;