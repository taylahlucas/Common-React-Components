import { ScrollView } from 'react-native';

interface CustomListProps {
  children: JSX.Element | JSX.Element[];
};

const CustomList = ({ children }: CustomListProps) => {
  return (
    <ScrollView 
      contentContainerStyle={{ alignItems: 'center', alignSelf: 'center' }}
      
      style={{ marginRight: 16, marginLeft: 16, padding: 16 }}>
      {children}
    </ScrollView>
  );
};

export default CustomList;