import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, useWindowDimensions, Platform, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import HeadPhone from "src/asset/icon/icons8-headphones-48.png";
import Read from "src/asset/icon/icons8-read-48.png";
import Write from "src/asset/icon/icons8-ereader-48.png";
import Book from "src/asset/icon/icons8-books64.png";
import Music from "src/asset/icon/icons8-music-48.png";
import Dictionary from "src/asset/icon/icons8-books-48.png";
import Story from "src/asset/icon/icons8-short-48.png";
import Store from "src/asset/icon/icons8-small-business-48.png";
import Youtobe from "src/asset/icon/icons8-play-button-48.png";
import db from 'src/data/db';
import { Alert } from 'react-native';


type HomeProps = {
    onPressBack?: () => void;
}

const Home: React.FC<HomeProps> = ({
    onPressBack = () => { },
}) => {
    const { styles } = useStyles(_styles);
    // console.log(db.exerciseUnit1DB);
    const alertUpdate = () => {
        return(
            Alert.alert('Updating' , 'Chức năng này hiện đang được nâng cấp hoàn thiện')
        )
    }
    return (
        <View style={tailwind('flex w-full p-4')}>
            <Text style={styles.title}>Basic:</Text>
            <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                <TouchableOpacity onPress={()=>alertUpdate()} style={[styles.box3,styles.shadow]}>
                    <Image source={HeadPhone} style={styles.img}></Image>
                    <Text style={styles.content}>audio & video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box3,styles.shadow]}>
                    <Image source={Read} style={styles.img}></Image>
                    <Text style={styles.content}>exercise</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box3,styles.shadow]}>
                    <Image source={Write} style={styles.img}></Image>
                    <Text style={styles.content}>practice</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Store:</Text>
            <View style={[styles.flexRow,  { justifyContent: "space-around" }]}>
                <TouchableOpacity style={[styles.box1,styles.shadow]}>
                    <Image source={Store} style={styles.img}></Image>
                    <Text style={styles.content}>Buy our Books</Text>
                    <Text style={styles.content}>Contact us: +84 940 272 166</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Extend:</Text>
            <View style={[styles.flexRow, { justifyContent: "space-around" }]}>
                <TouchableOpacity onPress={()=>alertUpdate()} style={[styles.box3,styles.shadow]}>
                    <Image source={Music} style={styles.img}></Image>
                    <Text style={styles.content}>music</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alertUpdate()} style={[styles.box3,styles.shadow]}>
                    <Image source={Dictionary} style={styles.img}></Image>
                    <Text style={styles.content}>Dictionary</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alertUpdate()} style={[styles.box3,styles.shadow]}>
                    <Image source={Story} style={styles.img}></Image>
                    <Text style={styles.content}>e story</Text>
                </TouchableOpacity>
            </View>

            {/* <Text style={styles.title}>Learn iels:</Text> */}
            <View style={[styles.box1,styles.shadow, { padding: 20, marginBottom: 40 }]}>
                <TouchableOpacity
                    style={[styles.box1 , { padding: 0 }]}
                >
                    <View style={styles.button}>
                        <Image
                            source={Youtobe}
                            style={{ width: 50, height: 50, marginRight: 15 }}
                        ></Image>
                        <Text>See Our Course</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.content}>Contact us: +84 940 272 166</Text>
            </View>
        </View>
    )

}

const _styles = (theme: ThemeType) => StyleSheet.create({
    container: {
        padding: 20,
        height: "65%",
        // overflow:"scroll",
      },
      flexRow: {
        flexDirection: "row",
        marginBottom: 30,
      },
    
      button: {
        backgroundColor: "#8a72ff",
        color: "white",
        width: "90%",
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 7,
        paddingRight: 7,
        fontSize: 17,
        fontWeight: "bold",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // textAlign:"center",
      },
    
      box3: {
        borderColor: "black",
        width: "30%",
        // margin: "auto",
        padding: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
      },
      box2: {
        // borderWidth: 2,
        borderColor: "black",
        width: "45%",
        // margin: "auto",
        padding: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
      },
      box1: {
        // borderWidth: 2,
        borderColor: "black",
        width: "100%",
        // margin: "auto",
        padding: 7,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
      },
    
      title: {
        marginLeft: -5,
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 7,
        zIndex: 40,
      },
      img: {
        width: 40,
        height: 40,
      },
      content: {
        fontSize: 13,
        textTransform: "capitalize",
      },
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
      }
})

export default Home;