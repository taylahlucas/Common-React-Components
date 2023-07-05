import StandardLayout from '../components/common/Layouts/StandardLayout.native';
import ScrollableList from '../components/common/List/ScrollableList';
import SelectableListItem from '../components/common/List/SelectableListItem.native';
import listItemStyles from '../components/common/List/ListStyles.native'
import textStyles from '../components/common/Text/TextStyles.native';
import useReactNavigation from '../navigation/hooks/useReactNavigation.native';
import { ScreenEnum } from '../utils/Types';
import StyledText from '../components/common/Text/StyledText.native';

const Home = () => {
  const navigation = useReactNavigation();

  return (
    <StandardLayout>
      <StyledText style={textStyles.headerText}>Custom Components & Animations</StyledText>
      <ScrollableList>
        <SelectableListItem 
          title={'Loading Animations'} 
          onClick={(): void => navigation.navigate(ScreenEnum.Loading)}
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

export default Home;