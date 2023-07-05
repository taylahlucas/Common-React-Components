import { Text } from 'react-native';
import { FontType, AlignmentType } from '../../../styles/Font/FontType';
import defaultStyle from '../../../styles/Font/FontStyle';

interface StyledTextProps {
  children: string;
  type?: FontType;
  color?: string;
  style?: any;
  align?: AlignmentType;
}

const StyledText: React.FunctionComponent<StyledTextProps> = ({ 
  children, 
  type = 'Heading', 
  color = 'black',
  style,
  align = 'center'
}) => {
  console.log("HERE:" , defaultStyle[type])
  return (
    <Text style={{ ...defaultStyle[type], ...defaultStyle[align], ...style, color: color }}>{children}</Text>
  );
};

export default StyledText;