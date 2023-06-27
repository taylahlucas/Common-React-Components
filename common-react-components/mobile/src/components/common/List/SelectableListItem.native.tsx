import { Text, Pressable } from 'react-native';

interface SelectableListItemProps {
  title: string;
  onClick: () => void;
};

const SelectableListItem = ({ title, onClick }: SelectableListItemProps) => {
  return (
    <Pressable style={{ backgroundColor: 'red', width: 300, height: 50, borderRadius: 10, justifyContent: 'center', marginBottom: 16 }} onPress={onClick}>
      <Text style={{ textAlign: 'center' }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default SelectableListItem;