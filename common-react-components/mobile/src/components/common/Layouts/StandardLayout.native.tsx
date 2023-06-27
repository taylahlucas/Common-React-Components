import { SafeAreaView, View } from 'react-native';

interface StandardLayoutProps {
  children: any;
};

const StandardLayout = ({ children }: StandardLayoutProps) => {
  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: '100%' }}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default StandardLayout;