import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigatorParams } from '../navigation/StackNavigatorParams';
import Home from '../screens/Home.native';
import Loading from '../screens/Loading.native';
import { ScreenEnum } from '../utils/Types';

const Stack = createStackNavigator<StackNavigatorParams>();

const StackNavigator: React.FunctionComponent = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={ScreenEnum.Home}>
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