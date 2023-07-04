import { Text, Pressable } from 'react-native';
import listStyles from './ListStyles.native';

interface SelectableListItemProps {
  title: string;
  onClick: () => void;
  style: any;
};

const SelectableListItem = ({ title, onClick }: SelectableListItemProps) => {
  return (
    <Pressable style={listStyles.selectableButton} onPress={onClick}>
      <Text style={{ textAlign: 'center' }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default SelectableListItem;