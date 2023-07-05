import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigatorParams } from '../navigation/StackNavigatorParams';
import Home from '../screens/Home.native';
import Loading from '../screens/Loading.native';
import { ScreenEnum } from '../utils/Types';
import useDefaultHeaderOptions from './hooks/useDefaultHeaderOptions.native';

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const StackNavigator: React.FunctionComponent = (): JSX.Element => {
  const headerOptions = useDefaultHeaderOptions();

  return (
    <Stack.Navigator initialRouteName={ScreenEnum.Home} screenOptions={headerOptions}>
      <Stack.Screen
        name={ScreenEnum.Home}
        component={Home}
      />
      <Stack.Screen
        name={ScreenEnum.Loading}
        component={Loading}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;