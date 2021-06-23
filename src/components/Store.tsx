import BookStoreBanner from "src/asset/img/ezgif.com-gif-makerr.jpg";
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

type StoreProps = {
    onPressBook?: () => void;

}
const Store: React.FC<StoreProps> = ({

    onPressBook = () => { },

}) => {
    const { styles } = useStyles(_styles);
    const { idExercise } = useStores();

    const [isLoading, setLoading] = useState(true);
    const [StoreDB, setData] = useState([]);
    React.useEffect(() => {
        fetch("https://my-json-server.typicode.com/gtl-201/serverJson/storeDB")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    const renderItem = ({ item = '' }) => {
        return (
            <View style={styles.boxIn}>
                <View style={styles.bookView}>
                    <Image source={{ uri: item.url }} style={styles.book} />
                </View>
                <View
                    style={{ justifyContent: "space-between", width: "60%" }}
                >
                    <View>
                        <Text style={[styles.bookName]}>{item.name}</Text>
                        <Text style={[styles.author]}>{item.author}</Text>
                        <Text>{item.des}</Text>
                        <Text style={styles.price}>{item.price}$</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            flexWrap: "wrap",
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {idExercise.setidExercise(item.id),onPressBook()}}
                        >
                            <Text style={styles.buttonLeft}>Read Demo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> Alert.alert('Liên Hệ FB Tui Nha','https://www.facebook.com/gtl201/')}>
                            <Text style={styles.buttonRight}>Buy It</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

    return (
        <View>
            <View>
                <Image
                    source={BookStoreBanner}
                    style={{ width: "100%", height: 600 }}
                ></Image>
            </View>

            <View style={styles.boxOut}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 15,
                    }}
                >
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent:"center" }}>
                        <Text>
                            <Icon
                                name="eye-outline"
                                size={19}
                                color="#8560f7"
                                style={{ marginRight: 5 }}
                            ></Icon>
                        </Text>
                        <Text style={{ fontSize: 19, fontWeight: "500", color: "#8560f7", paddingLeft:10 }}>
                            Grid View
                        </Text>
                    </TouchableOpacity>
                    <Text>
                        <Icon
                            name="search-outline"
                            size={19}
                            color="#0f00ff"
                        ></Icon>
                    </Text>
                </View>
                <View>
                    <FlatList
                        data={StoreDB}
                        renderItem={(item) => renderItem(item)}
                        // keyExtractor={item => item.id}
                        contentContainerStyle={{ height: "100%" }}
                    />
                </View>
                {/* <Text>xyz</Text> */}
            </View>
        </View>
    );
}

const _styles = (theme: ThemeType) => StyleSheet.create({
    boxOut: {
        width: "100%",

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -40,
        zIndex: 2,
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        paddingBottom: 0,
    },
    boxIn: {
        width: "100%",
        height: 200,
        flexDirection: "row",
        marginBottom: 25,
        justifyContent: "space-between",
    },
    bookView: {
        width: "36%",
        height: "100%",
        zIndex: 3,
        borderRadius: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    book: {
        minWidth: "100%",
        minHeight: "100%",
        maxHeight: "200%",
    },
    bookName: {
        fontSize: 20,
        fontWeight: "700",
        color: "#2e217b",
        marginVertical: 2,
    },
    author: {
        fontSize: 17,
        fontWeight: "700",
        color: "#808080e6",
    },
    price: {
        color: "red",
        fontWeight: "600",
    },

    buttonLeft: {
        borderWidth: 1.5,
        fontSize: 17,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 6,
        marginBottom: 7,
        borderColor: "#a56301",
        backgroundColor: "#fca72aba",
        marginRight: 10,
    },
    buttonRight: {
        borderWidth: 1.5,
        fontSize: 17,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 6,
        marginBottom: 7,
        borderColor: "black",
        backgroundColor: "#2d2d2dcf",
        color: "white",
    },
})

export default Store;