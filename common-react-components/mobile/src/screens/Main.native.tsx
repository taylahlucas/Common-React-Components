import { Text } from 'react-native';
import StandardLayout from '../components/common/Layouts/StandardLayout.native';
import ScrollableList from '../components/common/List/ScrollableList';
import SelectableListItem from '../components/common/List/SelectableListItem.native';
import listItemStyles from '../components/common/List/ListStyles.native'
import textStyles from '../components/common/Text/TextStyles.native';

const Main = () => {
  return (
    <StandardLayout>
      <Text style={textStyles.headerText}>Custom Components & Animations</Text>
      <ScrollableList>
        <SelectableListItem 
          title={'test-1'} 
          onClick={(): void => console.log("HERE")}
          style={listItemStyles.selectableButton} 
        />
        <SelectableListItem 
          title={'test-2'} 
          onClick={(): void => console.log("HERE")}
          style={listItemStyles.selectableButton} 
        />
        <SelectableListItem 
          title={'test-3'} 
          onClick={(): void => console.log("HERE")}
          style={listItemStyles.selectableButton} 
        />
      </ScrollableList>
    </StandardLayout>
  );
};

export default Main;