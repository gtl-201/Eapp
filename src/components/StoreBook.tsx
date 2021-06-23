import BookStoreBanner from "src/asset/img/ezgif.com-gif-makerr.jpg";
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Utf8 from 'utf8';
import Base64 from 'react-native-base64';

type BookStoreProps = {
    onPressExerciseAv?: () => void;
    onPressExerciseVa?: () => void;

}
const BookStore: React.FC<BookStoreProps> = ({

    onPressExerciseAv = () => { },
    onPressExerciseVa = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { idExercise } = useStores();
    const utf8 = require('utf8');
    const base64 = require('utf8');

    //START FETCH JSON
    const [isLoading, setLoading] = useState(true);
    const [Book, setData] = useState([]);
    const Url = () => {
        return (
            "https://my-json-server.typicode.com/gtl-201/serverJson" +
            "/storeDB?id=" + idExercise.idExercise
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

    const [dark, changeDark] = React.useState(false);
    const renderItem = ({ item = '' }) => {
        return (
            <View style={{ flex: 1 }}>
                {
                    dark == false ?
                        <View style={[{ flex: 1, backgroundColor: "#f1f1f1" }, tailwind('relative')]}>
                            <View>
                                <Image source={{ uri: item.url }} style={styles.image} />
                            </View>
                            <View>
                                <Text style={[styles.title, styles.black, tailwind('text-3xl font-bold')]}>{item.name}</Text>
                                <Text style={[styles.content, styles.black]}>{Utf8.decode(Base64.decode(item.readDemo))}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => (changeDark(!dark))}
                                style={[tailwind('absolute top-2 right-2'),{marginTop:560}]}
                            >
                                <Icon
                                    name="contrast-outline"
                                    size={30}
                                    color="black"
                                    style={{ opacity: 0.9 }}
                                ></Icon>
                            </TouchableOpacity>
                        </View> :
                        <View style={[{ flex: 1, backgroundColor: "#000000e6" }, tailwind('relative')]}>
                            <View>
                                <Image source={{ uri: item.url }} style={styles.image} />
                            </View>
                            <View>
                                <Text style={[styles.title, styles.lightwhite, tailwind('text-3xl font-bold text-yellow-400')]}>{item.name}</Text>
                                <Text style={[styles.content, styles.lightwhite]}>{Utf8.decode(Base64.decode(item.readDemo))}</Text>
                                {/* {utf8.decode(base64.decode(item.readDemo))} */}
                            </View>
                            <TouchableOpacity
                                onPress={() => (changeDark(!dark))}
                                style={[tailwind('absolute top-2 right-2'),{marginTop:560}]}
                            >
                                <Icon
                                    name="contrast-outline"
                                    size={30}
                                    color="white"
                                    style={{ opacity: 0.9 }}
                                ></Icon>
                            </TouchableOpacity>
                        </View>
                }
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={Book}
                renderItem={(item) => renderItem(item)}
                keyExtractor={item => item.id}
                contentContainerStyle={[tailwind('bg-gray-200'), {}]}
            />
        </View>
    )

}

const _styles = (theme: ThemeType) => StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: "center",
        marginTop: 20,
        marginHorizontal: 30,
    },
    content: {
        fontSize: 18,
        padding: 20,
        paddingTop: 10
    },
    image: {
        width: "100%",
        height: 500,
        zIndex: 2,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    black: {
        color: "black",
    },
    lightwhite: {
        color: "#e8e7e7f5",
    },
    light: { position: "absolute", bottom: 10, right: 10 },

})

export default BookStore;