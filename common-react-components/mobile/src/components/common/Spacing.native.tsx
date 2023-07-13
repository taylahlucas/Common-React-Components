import { View } from 'react-native';

interface SpacingProps {
  height?: number;
}
const Spacing = ({ height = 1 }: SpacingProps) => {
  return (
    <View style={{ height: height }} />
  );
};

export default Spacing;