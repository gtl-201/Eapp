import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Tts from 'react-native-tts';


type LearnEachProps = {
    onPressExerciseAv?: () => void;
    onPressExerciseVa?: () => void;

}
const LearnEach: React.FC<LearnEachProps> = ({

    onPressExerciseAv = () => { },
    onPressExerciseVa = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { idExercise } = useStores();

    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultRate(0.3);
    Tts.setDefaultPitch(0.9);
    const TTSP = (engsub = '') => {
        try {
            console.log(engsub)
            Tts.speak(engsub)
        } catch (e) {
            console.log(`TTS DEO RUN DC CAY +1`, e)
        }
    }

    //START FETCH JSON
    const [isLoading, setLoading] = useState(true);
    const [Exercises, setData] = useState([]);
    const Url = () => {
        return (
            "https://my-json-server.typicode.com/gtl-201/serverJson" +
            "/exerciseUnit" +
            idExercise.idExercise +
            "DB"
        );
    };
    // console.log(Url())

    const put = () => {
        if (isLoading == true) {
            // console.log(Url())
            fetch(Url())
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }
    };
    put();
    // END FETCH JSON


    const [layout, setLayout] = useState(false)
    const renderItem = ({ item = '' }) => {
        return (
            <View>
                {layout == false ?
                    <TouchableOpacity onPress={()=>TTSP(item.eng)}>
                        <Image
                            source={{
                                uri: item.uri,
                            }}
                            style={{ height: 170, width: "100%", }}
                        ></Image>
                        <Text style={tailwind('text-2xl text-red-500 font-bold text-center py-1 capitalize items-center justify-center')}>{item.eng}</Text>
                        <Text style={tailwind('text-2xl text-green-200 font-bold text-center py-1 capitalize items-center justify-center')}>{item.na}</Text>
                        <Text style={tailwind('text-2xl text-black font-bold text-center py-1 capitalize items-center justify-center')}>{item.vi}</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={()=>TTSP(item.eng)} style={tailwind('flex-row py-2 px-3 justify-between items-center ')}>
                        <View style={tailwind('w-1/2')}>
                            <Text style={tailwind('text-xl text-left text-red-500 font-bold py-1 capitalize items-center justify-center')}>{item.eng}</Text>
                            <Text style={tailwind('text-xl text-left text-green-200 font-bold py-1 capitalize items-center justify-center')}>{item.na}</Text>
                        </View>

                        <Text style={tailwind('w-1/2 text-xl text-right text-black font-bold py-1 capitalize items-center justify-center')}>{item.vi}</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }

    return (
        <View style={[tailwind('w-full px-2 justify-around')]}>
            <TouchableOpacity onPress={() => setLayout(!layout)}>
                <Icon name={'layers'} size={30} color='black' style={tailwind('mt-3 mb-2 mx-5')}></Icon>
            </TouchableOpacity>
            <FlatList
                data={Exercises}
                renderItem={(item) => (
                    <View style={[tailwind('bg-white rounded-xl m-2'), { flex: 1 }, styles.shadow]}>
                        {renderItem(item)}
                    </View>
                )}
                keyExtractor={item => item.id}
                horizontal={false}
                contentContainerStyle={tailwind('w-full')}
            />

        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
    shadow: {
        shadowColor: "#fbad50",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    }
})

export default LearnEach;