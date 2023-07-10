import StandardLayout from '../components/common/Layouts/StandardLayout.native';
import textStyles from '../components/common/Text/TextStyles.native';
import LoadingCircle from '../components/animations/Loading/LoadingCircle.native';
import StyledText from '../components/common/Text/StyledText.native';

const Loading = () => {
  return (
    // TODO: Center content
    <StandardLayout>
      <StyledText style={textStyles.headerText}>Loading Animation</StyledText>
      <LoadingCircle />
    </StandardLayout>
  );
};

export default Loading;