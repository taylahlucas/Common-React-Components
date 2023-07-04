import { Text } from 'react-native';
import { FontType } from '../../../styles/Font/FontType';
import defaultStyle from '../../../styles/Font/FontStyle.android';

interface StyledTextProps {
  text: string;
  type?: FontType;
  color?: string;
}

const StyledText: React.FunctionComponent<StyledTextProps> = ({ 
  text, 
  type = 'Heading', 
  color = 'black'
}) => {
  return (
    <Text style={[defaultStyle[type]]}>{text}</Text>
  );
};

export default StyledText;