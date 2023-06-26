import { Text } from 'react-native';
import { FontType } from '../../../../shared/config/Font/FontType';
import defaultStyle from '../../../../shared/config/Font/FontStyle';

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