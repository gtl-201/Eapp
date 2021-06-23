import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { useServices } from 'src/services';
import { screens } from 'src/services/navigation/screens';
import Header from 'src/components/HomeHeader';
import Store from 'src/components/Store';




const ActivityScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { nav, t } = useServices();

  return (
    <>
      <ScrollView>
        <Store onPressBook={() => nav.pushStoreBook(componentId)} />
      </ScrollView>
    </>
  )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
});

ActivityScreen.options = props => screens.activity.options();

export default ActivityScreen;
