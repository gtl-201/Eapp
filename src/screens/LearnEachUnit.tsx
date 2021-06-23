import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { observer } from 'mobx-react';
import { NavigationFunctionComponent } from 'react-native-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Learn from 'src/components/LearnEachUnit';
import Header from 'src/components/HomeHeader';
import navigation from 'src/services/navigation';
import { screens } from 'src/services/navigation/screens';
import { useServices } from 'src/services';



const NotificationScreen: NavigationFunctionComponent = observer(({
    componentId,
}) => {
    const { nav, t } = useServices();

    return (
        <>
            <ScrollView>
                <Header
                    backButton={true}
                    title={''}
                    name={'Learnning'}
                    onPressBack={() => navigation.pop(componentId)}
                />
                <Learn />
            </ScrollView>
        </>
    )
});

const _styles = (theme: ThemeType) => StyleSheet.create({
});

NotificationScreen.options = props => screens.notification.options();

export default NotificationScreen;
