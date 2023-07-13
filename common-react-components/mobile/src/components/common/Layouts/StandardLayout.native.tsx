import { SafeAreaView, View } from 'react-native';
import useReactNavigation from '../../../navigation/hooks/useReactNavigation.native';
import IconButton from '../Buttons/IconButton.native';
import If from '../If.native';
import Spacing from '../Spacing.native';
import { layoutStyles } from './LayoutStyles.native'

interface StandardLayoutProps {
  children: any;
  showBack?: boolean;
};

const StandardLayout = ({ children, showBack = true }: StandardLayoutProps) => {
  const navigation = useReactNavigation();
  
  return (
    <SafeAreaView>
      <If condition={showBack} elseChild={<Spacing height={38} />}>
        <IconButton name='chevron-back-outline' onPress={(): void => navigation.goBack()} />
      </If>
      <View style={layoutStyles.container}>
      {children}
      </View>
    </SafeAreaView>
  );
};

export default StandardLayout;