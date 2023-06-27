import { Text } from 'react-native';
import StandardLayout from '../common/StandardLayout.native';
import CustomList from '../common/List/CustomList.native';
import SelectableListItem from '../common/List/SelectableListItem.native';

const Main = () => {
  return (
    <StandardLayout>
      <Text style={{ padding: 20, fontSize: 32, textAlign: 'center' }}>Custom Components & Animations</Text>
      <CustomList>
        <SelectableListItem title={'test'} onClick={(): void => console.log("HERE")} />
        <SelectableListItem title={'test'} onClick={(): void => console.log("HERE")} />
      </CustomList>
    </StandardLayout>
  );
};

export default Main;