import { Text } from 'react-native';
import { FontType } from '../Styles/Font/FontType';
import defaultStyle from '../Styles/Font/FontStyle.android';

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