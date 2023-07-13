import { useEffect } from 'react';
import { Animated } from 'react-native';

interface SetLoadingDotsAnimationProps {
  animation: Animated.Value;
  duration: number;
  index: number;
};

const useSetLoadingDotsAnimation = ({ animation, duration, index }: SetLoadingDotsAnimationProps) => {
  useEffect(() => {
    setInterval(() => {
      Animated.timing(animation, {
        toValue: -30,
        duration: 500,
        delay: index * 80,
        useNativeDriver: true
      }).start(() => {
        Animated.timing(animation, {
          toValue: 6,
          duration: 500,
          delay: index * 80,
          useNativeDriver: true
        }).start();
      });
    }, duration);
  }, []);
};

export default useSetLoadingDotsAnimation;