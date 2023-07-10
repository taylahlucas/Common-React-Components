import React, { useEffect } from 'react';
import { TextInput } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import Animated, { 
  withTiming,
  useSharedValue, 
  useAnimatedProps, 
  useDerivedValue
} from 'react-native-reanimated';

interface LoadingCircleProps {
  width?: number;
  height?: number;
  radius?: number;
  strokeWidth?: number;
  duration?: number;
}
const AnimatedLoadingCircle = Animated.createAnimatedComponent(Circle);
const AnimatedLoadingText = Animated.createAnimatedComponent(TextInput);
Animated.addWhitelistedNativeProps({ text: true })

const LoadingCircle = ({ width = 50, height = 50, radius = 45, strokeWidth = 5, duration = 2000 }: LoadingCircleProps) => {
  const circumference = radius * Math.PI * 2;
  const strokeOffset = useSharedValue(circumference);
  const percentage = useSharedValue(0);
  
  const calculatePercentage = useDerivedValue(() => {
    const number = ((circumference - strokeOffset.value) / (circumference)) * 100;
    percentage.value = withTiming(number, { duration: duration });
    return percentage.value;
  });

  const animatedTextProps = useAnimatedProps(() => {
    return {
      text: `${Math.round(calculatePercentage.value)}%`,
    } as any;
  });

  const animatedCircleProps = useAnimatedProps(() => {
    const offset = Math.round(percentage.value) === 100 ? circumference : strokeOffset.value;
    return {
      strokeDashoffset: withTiming(offset, { duration: duration })
    };
  });

  useEffect(() => {
    strokeOffset.value = 0;

    const interval = setInterval(() => {
      if (Math.round(percentage.value) === 100) {
        strokeOffset.value = 0;
        percentage.value = 0;
      }
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <Svg width={width * 2} height={height * 2}>
      <Circle
        cx={width}
        cy={height}
        r={radius}
        stroke="#E0E1DD"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* TODO: Move to text styles */}
      <AnimatedLoadingText
        style={{ color: '#F64F59', fontSize: 24, fontWeight: 'bold', alignSelf: 'center', marginTop: radius - 10 }}
        animatedProps={animatedTextProps}
      />
      <AnimatedLoadingCircle
        animatedProps={animatedCircleProps}
        cx={width}
        cy={height}
        r={radius}
        stroke="#F64F59"
        strokeWidth={strokeWidth}
        fill="#EDEDE9"
        strokeDasharray={circumference}
      />
    </Svg>
  );
};

export default LoadingCircle;