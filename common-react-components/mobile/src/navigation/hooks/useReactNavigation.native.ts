import { useRef } from 'react';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';
import { StackNavigationProp } from '@react-navigation/stack/src/types';
import { NativeNavigation, ScreenEnum } from '../../utils/Types';

export const useReactNavigation = (): NativeNavigation => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const screenName = useNavigationState((state) => state?.routes[state?.index].name);

  return useRef({
    navigate: (page: any, params?: any): void => navigation.navigate(page, params),
    getCurrentScreenName: (): ScreenEnum | null => {
      return screenName as ScreenEnum;
    },
    goBack: (): void => navigation.goBack(),
    setOptions: (options: any): void => navigation.setOptions(options)
  }).current;
};

export default useReactNavigation;