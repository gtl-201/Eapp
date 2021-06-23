import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements'

type LearnALlProps = {
    onPressLearn?: () => void;

}



const LearnALl: React.FC<LearnALlProps> = ({

    onPressLearn = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { idExercise } = useStores();


    const [isLoading, setLoading] = useState(true);
    const [Exercises, setData] = useState([]);
    React.useEffect(() => {
        fetch("https://my-json-server.typicode.com/gtl-201/serverJson/exercisesDB")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    const renderItem = ({ item = '' }) => {
        return (
            <Button
                title={item.title}
                titleStyle={tailwind('capitalize text-xl font-semibold tracking-wider')}
                // containerStyle={}
                buttonStyle={{backgroundColor:"ffffff00"}}
                onPress={() => { idExercise.setidExercise(item.id), onPressLearn() }}>
            </Button>
        )
    }

    return (
        <View style={[tailwind('w-full px-2 justify-around'), { marginTop: 50, flex: 1 }]}>
            <FlatList
                data={Exercises}
                renderItem={(item) => (
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e95950', '#bc2a8d']} style={[tailwind('bg-white rounded-xl m-2'), { flex: 1 }, styles.shadow]}>
                        {renderItem(item)}
                    </LinearGradient>

                )}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={2}
                contentContainerStyle={tailwind('w-full mt-10')}
            />
            {console.log(Exercises)}
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

export default LearnALl;