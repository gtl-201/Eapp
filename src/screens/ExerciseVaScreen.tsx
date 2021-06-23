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
import navigation from 'src/services/navigation';
import Header from 'src/components/HomeHeader';
import Exercice from 'src/components/exerciseVa';
import tailwind from 'tailwind-rn';



const ExcerciseEachScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  return (
    <View style={{flex:1}}>
        <Header 
        name={"Viet-Anh"}
        backButton={true}
        onPressBack={() => navigation.pop(componentId)}
        />
        <Exercice/>
    </View>
  )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
});

ExcerciseEachScreen.options = props => screens.exerciseEach.options();

export default ExcerciseEachScreen;
