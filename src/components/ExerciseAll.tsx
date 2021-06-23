import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

type ExerciseAllProps = {
    onPressExerciseAv?: () => void;
    onPressExerciseVa?: () => void;
    onPressListen?: () => void;

}



const ExerciseAll: React.FC<ExerciseAllProps> = ({

    onPressExerciseAv = () => { },
    onPressExerciseVa = () => { },
    onPressListen = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const [DropDownValue, setDropDownValue] = useState('')

    const [isLoading, setLoading] = useState(true);
    const [Exercises, setData] = useState([]);
    React.useEffect(() => {
        fetch("https://my-json-server.typicode.com/gtl-201/serverJson/exercisesDB")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    // const data = [
    //     {
    //         "id": 1,
    //         "title": "Job In Life",
    //         "VA": 100,
    //         "AV": 100,
    //         "L": 99
    //     },
    //     {
    //         "id": 2,
    //         "title": "Job In Life",
    //         "VA": 10,
    //         "AV": 100,
    //         "L": 20
    //     },
    //     {
    //         "id": 3,
    //         "title": "Job In Life",
    //         "VA": 10,
    //         "AV": 70,
    //         "L": 60
    //     }
    // ]
    const { idExercise } = useStores();

    const renderItem = ({ item = '' }) => {
        return (
            <View>
                {
                    (item.VA + item.AV)/2 > 75 ?
                        <Text style={[{color:"#00d50c"},tailwind('text-xl text-center font-bold pt-1 capitalize')]}>{item.title}</Text>
                        : (item.VA + item.AV)/2 > 50 ?
                            <Text style={[{color:"#ff6a00"},tailwind('text-xl text-center font-bold pt-1 capitalize')]}>{item.title}</Text>
                            :
                            <Text style={[{color:"red"},tailwind('text-xl text-center font-bold pt-1 capitalize')]}>{item.title}</Text>
                }

                {item.AV > 75 ? (
                    <TouchableOpacity onPress={() => { idExercise.setidExercise(item.id), onPressExerciseAv() }} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Anh-Viet</Text>
                        <Text style={[{ color: "#00d50c" }, tailwind('text-base')]}>{item.AV}%</Text>
                    </TouchableOpacity>
                ) : item.AV > 50 ? (
                    <TouchableOpacity onPress={() => { idExercise.setidExercise(item.id), onPressExerciseAv() }} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Anh-Viet</Text>
                        <Text style={[{ color: "#ff6a00" }, tailwind('text-base')]}>{item.AV}%</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => { idExercise.setidExercise(item.id), onPressExerciseAv() }} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Anh-Viet</Text>
                        <Text style={[{ color: "red" }, tailwind('text-base')]}>{item.AV}%</Text>
                    </TouchableOpacity>
                )}

                {item.VA > 75 ? (
                    <TouchableOpacity onPress={() => { idExercise.setidExercise(item.id), onPressExerciseVa() }} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Viet-Anh</Text>
                        <Text style={[{ color: "#00d50c" }, tailwind('text-base')]}>{item.VA}%</Text>
                    </TouchableOpacity>
                ) : item.VA > 50 ? (
                    <TouchableOpacity onPress={() => { idExercise.setidExercise(item.id), onPressExerciseVa() }} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Viet-Anh</Text>
                        <Text style={[{ color: "#ff6a00" }, tailwind('text-base')]}>{item.VA}%</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => { idExercise.setidExercise(item.id), onPressExerciseVa() }} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Viet-Anh</Text>
                        <Text style={[{ color: "red" }, tailwind('text-base')]}>{item.VA}%</Text>
                    </TouchableOpacity>
                )}

                {item.L > 75 ? (
                    <TouchableOpacity onPress={()=>{ idExercise.setidExercise(item.id), onPressListen()}} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Listen</Text>
                        <Text style={[{ color: "#00d50c" }, tailwind('text-base')]}>{item.L}%</Text>
                    </TouchableOpacity>
                ) : item.L > 50 ? (
                    <TouchableOpacity onPress={()=>{ idExercise.setidExercise(item.id), onPressListen()}} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Listen</Text>
                        <Text style={[{ color: "#ff6a00" }, tailwind('text-base')]}>{item.L}%</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={()=>{ idExercise.setidExercise(item.id), onPressListen()}} style={tailwind('flex flex-row p-3 justify-between')}>
                        <Text style={tailwind('text-base ')}>Listen</Text>
                        <Text style={[{ color: "red" }, tailwind('text-base')]}>{item.L}%</Text>
                    </TouchableOpacity>
                )}

            </View>
        )

    }

    return (
        <View style={[tailwind('w-full px-2 justify-around'), { marginTop: 40, flex: 1 }]}>
            <FlatList

                data={Exercises}
                renderItem={(item) => (
                    <View style={[tailwind('bg-white rounded-xl m-2'), { flex: 1 }, styles.shadow]}>
                        {renderItem(item)}
                    </View>
                )}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
                contentContainerStyle={tailwind('w-full')}
            />
        </View>
    )
}

const _styles = (theme: ThemeType) => StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    }
})

export default ExerciseAll;