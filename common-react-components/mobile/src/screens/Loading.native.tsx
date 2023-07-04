import { Text } from 'react-native';
import StandardLayout from '../components/common/Layouts/StandardLayout.native';
import textStyles from '../components/common/Text/TextStyles.native';

const Loading = () => {
  return (
    <StandardLayout>
      <Text style={textStyles.headerText}>Loading Animation</Text>
    </StandardLayout>
  );
};

export default Loading;