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
import Header from 'src/components/HomeHeader';
import Home from 'src/components/Home';
import tailwind from 'tailwind-rn';



const HomeScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {

  return (
    <>
      <Header
        name={"gtl learn english"}
        title={""}
        staff={""}
        backButton={false}
      />
      <ScrollView style={{marginTop:40}}>
        <Home/>
      </ScrollView>
    </>
  )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
});

HomeScreen.options = props => screens.home.options();

export default HomeScreen;
