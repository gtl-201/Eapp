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
import Learn from 'src/components/Learn';
import Header from 'src/components/HomeHeader';

import { screens } from 'src/services/navigation/screens';



const NotificationScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { nav, t } = useServices();

  return (
    <>
      <ScrollView>
        <Header
          backButton={false}
          title={'Learning'}
          name={'Learnning'}
        />
        <Learn onPressLearn={() => nav.pushLearnEach(componentId)}/>
      </ScrollView>
    </>
  )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
});

NotificationScreen.options = props => screens.notification.options();

export default NotificationScreen;
