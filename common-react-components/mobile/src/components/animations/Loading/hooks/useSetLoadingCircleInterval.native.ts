import { useEffect } from 'react';
import { SharedValue } from 'react-native-reanimated';

interface SetLoadingCircleIntervalProps {
  strokeOffset: SharedValue<number>;
  percentage: SharedValue<number>;
  duration: number;
}

const useSetLoadingCircleInterval = ({ strokeOffset, percentage, duration }: SetLoadingCircleIntervalProps) => {
  useEffect(() => {
    strokeOffset.value = 0;

    const interval = setInterval(() => {
      if (Math.round(percentage.value) === 100) {
        strokeOffset.value = 0;
        percentage.value = 0;
      }
    }, duration * 2)

    return () => {
      clearInterval(interval)
    }
  }, []);
};

export default useSetLoadingCircleInterval;