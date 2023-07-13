import { View } from 'react-native';
import LoadingDot from './LoadingDot.native';

interface LoadingDots {
  numberOfDots?: number;
}

const LoadingDots = ({ numberOfDots = 5 }) => {
  // TODO: clean this up
  const arrayOfDigits = [];
  for (let i=0; i < numberOfDots; i++) {
    arrayOfDigits.push(i)
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {arrayOfDigits.map((index) => <LoadingDot key={index} index={index} duration={numberOfDots * 500} />)}
    </View>
  );
};

export default LoadingDots;