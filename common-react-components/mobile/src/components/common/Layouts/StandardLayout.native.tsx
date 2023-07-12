import { SafeAreaView, View, Button } from 'react-native';
import useReactNavigation from '../../../navigation/hooks/useReactNavigation.native';
import IconButton from '../Buttons/IconButton.native';

interface StandardLayoutProps {
  children: any;
  showBack?: boolean;
};

const StandardLayout = ({ children, showBack = true }: StandardLayoutProps) => {
  const navigation = useReactNavigation();

  // TODO: Move into styles && align heading to top
  return (
    <SafeAreaView>
      {showBack ? <IconButton name='chevron-back-outline' onPress={(): void => navigation.goBack()} /> : <View style={{ marginTop: 38 }} />}
      <View style={{ width: '100%', height: '100%' }}>
      {children}
      </View>
    </SafeAreaView>
  );
};

export default StandardLayout;