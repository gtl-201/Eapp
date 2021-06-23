import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions, Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import Bg from "src/asset/img/c739830ada7ea71fefed868be577b57c.jpg";
import Avt from "src/asset/img/avt.jpg";


type HomeHeaderShowProps = {
    name: string;
    title: string;
    staff: string;
    backButton?: boolean;
    onPressBack?: () => void;
}

const HomeHeaderShow: React.FC<HomeHeaderShowProps> = ({
    name,
    backButton,
    title,
    staff,
    onPressBack = () => { },
}) => {
    const { styles } = useStyles(_styles);

    if (backButton == false) {
        return (
            <SafeAreaView>
                <View style={[styles.container, { marginBottom: 30, zIndex:10}]}>
                    <Image source={Bg} style={[tailwind('w-full'), { height: 150 }]}></Image>
                    <Image source={Avt} style={styles.circleAvt}></Image>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={tailwind('relative')}>
                <Image source={Bg} style={[tailwind('rounded-b-2xl'), { width: "100%", height: 80 }]}></Image>
                <View style={[tailwind('w-full items-center justify-between flex-row px-4'), { height: 80, marginTop: -80 }]}>
                    <TouchableOpacity onPress={onPressBack} style={tailwind('w-1/5')}>
                        <Icon name={'arrow-back-circle'} size={40} color="white" ></Icon>
                    </TouchableOpacity>
                    <View style={tailwind('w-3/5 ')}>
                        <Text style={tailwind('text-2xl tracking-wider font-bold text-center uppercase')}>{name}</Text>
                    </View>
                    <View style={tailwind('w-1/5')}>
                        <Image source={Avt} style={[{ width: 60, height: 60 }, tailwind('rounded-full bg-red-300')]}></Image>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const _styles = (theme: ThemeType) => StyleSheet.create({
    circleAvt: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -60,
        // borderWidth: 1,
        borderColor: "gray",
    },
    container: {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "25%",
        width: "100%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    }
})

export default HomeHeaderShow;