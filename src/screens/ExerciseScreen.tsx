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
import Exercice from 'src/components/ExerciseAll';
import { useServices } from 'src/services';



const ChatScreen: NavigationFunctionComponent = observer(({
  componentId,
}) => {
  const { nav, t } = useServices();
  return (
    <>
      <ScrollView>
        <Header
          name={"exercice"}
          title={""}
          staff={""}
          backButton={false}
        />
        <View style={{ marginTop: 30 }}>
          <Exercice
            onPressExerciseAv={() => nav.pushExerciseEach(componentId)}
            onPressExerciseVa={() => nav.pushExerciseEachVa(componentId)}
            onPressListen={() => nav.pushListen(componentId)}
          />
        </View>
      </ScrollView>
    </>
  )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
});

ChatScreen.options = props => screens.chat.options();

export default ChatScreen;
