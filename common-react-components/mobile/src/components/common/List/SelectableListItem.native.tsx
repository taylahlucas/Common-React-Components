import { Text, Pressable, TouchableNativeFeedback } from 'react-native';
import StyledText from '../Text/StyledText.native';
import listStyles from './ListStyles.native';

interface SelectableListItemProps {
  title: string;
  onClick: () => void;
  style: any;
};

const SelectableListItem = ({ title, onClick }: SelectableListItemProps) => {
  const handlePress = () => {
    // Handle press event
    onClick();
  };

  const rippleEffect = () => {
    console.log("RIPPLE EFFECT");
    // TODO: On button press, dim button color ?
    // if (TouchableNativeFeedback.canUseNativeForeground()) {
    //   // Use native ripple effect on supported Android versions
    //   return (
    //     <TouchableNativeFeedback onPress={handlePress} useForeground>
    //       <View style={{ padding: 16, backgroundColor: 'blue' }}>
    //         <Text style={{ color: 'white' }}>{title}</Text>
    //       </View>
    //     </TouchableNativeFeedback>
    //   );
    // } else {
    //   // Fallback to default Pressable component on unsupported Android versions and other platforms
    //   return (
    //     <Pressable onPress={handlePress} android_ripple={{ color: 'rgba(0, 0, 255, 0.3)' }}>
    //       <View style={{ padding: 16, backgroundColor: 'blue' }}>
    //         <Text style={{ color: 'white' }}>{title}</Text>
    //       </View>
    //     </Pressable>
    //   );
    // }
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