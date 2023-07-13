import { Animated } from 'react-native';
import useSetLoadingDotsAnimation from './hooks/useSetLoadingDotsAnimation.native';

interface LoadingDotProps {
  index: number;
  width?: number;
  height?: number;
  color?: string;
  duration: number;
}

const LoadingDot = ({ index, width = 20, height = 20, color = '#F64F59', duration }: LoadingDotProps) => {
  const animation = new Animated.Value(0);

  useSetLoadingDotsAnimation({ animation, duration, index});

  const animatedStyle = {
    transform: [
      {
        translateY: animation
      }
    ]
  }
  
  return (
    <Animated.View style={animatedStyle}>
      <Animated.View style={{ margin: 6, width: width, height: height, borderRadius: width/2, backgroundColor: color }} />
    </Animated.View>
  );
};

export default LoadingDot;