import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';

import { screens } from 'src/services/navigation/screens';



const IdCardScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {

  return (
    <>
      <ScrollView>
        <Text>Danh Ba Tab</Text>
      </ScrollView>
    </>
  )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
});

IdCardScreen.options = props => screens.idCard.options();

export default IdCardScreen;
