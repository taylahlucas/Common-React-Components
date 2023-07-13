import { Pressable } from 'react-native';
import StyledText from '../Text/StyledText.native';
import listStyles from './ListStyles.native';

interface SelectableListItemProps {
  title: string;
  onClick: () => void;
  style: any;
};

const SelectableListItem = ({ title, onClick }: SelectableListItemProps) => {
  const rippleEffect = () => {
    // TODO
  };
  
  return (
    <Pressable 
      style={listStyles.selectableButton} 
      onPress={(): void => {
        onClick();
        rippleEffect();
      }}
    >
      <StyledText type={'ListItemTitle'}>
        {title}
      </StyledText>
    </Pressable>
  );
};

export default SelectableListItem;