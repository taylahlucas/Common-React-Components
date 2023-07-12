import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconButtonProps {
  name: string;
  onPress: () => void;
};

const IconButton = ({ name, onPress }: IconButtonProps) => {
  return (
    <Icon name={name} size={35} onPress={onPress} />
  );
};

export default IconButton;