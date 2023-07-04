import { ScrollView } from 'react-native';
import listItemStyles from './ListStyles.native';

interface CustomListProps {
  children: JSX.Element | JSX.Element[];
};

const ScrollableList = ({ children }: CustomListProps) => {
  return (
    <ScrollView 
      contentContainerStyle={listItemStyles.scrollableContent}
      style={listItemStyles.scrollableList}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableList;