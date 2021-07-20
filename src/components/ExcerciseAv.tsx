import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'
import Tts from 'react-native-tts';
import SoundPlayer from 'react-native-sound-player';
// import { default as SoundPlayer } from 'react-native-sound-player';


type ExerciseEachProps = {
  onPressExerciseEach?: () => void;
}

const ExerciseEach: React.FC<ExerciseEachProps> = ({

  onPressExerciseEach = () => { },

}) => {
  const { styles } = useStyles(_styles);
  const [DropDownValue, setDropDownValue] = useState('')
  const { idExercise } = useStores();


  const play = (boolenn = '') => {
    // try {
    //   boolenn == 'true' ?
    //     SoundPlayer.playUrl('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav')
    //     : boolenn == 'false' &&
    //     SoundPlayer.playUrl('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg')
    //   console.log(boolenn);
    // } catch (e) {
    //   console.log(`soundPlay deo chay cay`, e)
    // }
  }

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

  //START VA RESULT
  const [numRight, setNumRight] = React.useState([]);
  const [numWrong, setNumWrong] = React.useState([]);

  let total = numWrong.length + numRight.length;
  let record = (numRight.length / total) * 100;

  // console.log(numWrong);

  const Result = (
    <View
      style={tailwind('justify-center items-center pt-5')}
    >
      <Text style={tailwind('text-2xl uppercase text-green-500 font-bold')}>End Game Roài</Text>
      {record > 80 ? (
        <Text style={[{ color: "#12ff12" }, tailwind('text-xl font-bold')]}>
          {Math.ceil(record)}%
        </Text>
      ) : record > 60 ? (
        <Text style={[{ color: "#ff6a00" }, tailwind('text-xl font-bold')]}>
          {Math.ceil(record)}%
        </Text>
      ) : (
        <Text style={[{ color: "red" }, tailwind('text-xl font-bold')]}>
          {Math.ceil(record)}%
        </Text>
      )}
      <Text style={tailwind('text-xl ')}>
        Right: {numRight.length}/{total}
      </Text>
    </View>
  )

  //END VA RESULT

  const ran = () => {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      ranNums = [],
      i = nums.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      ranNums.push(nums[j]);
      nums.splice(j, 1);
    }
    return ranNums;
  };

  const randomWrong = () => {
    var numsWrong = [0, 1, 2, 3, 4, 5],
      ranWrong = [],
      i = numsWrong.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * i);
      ranWrong.push(numsWrong[j]);
      numsWrong.splice(j, 1);
    }
    return ranWrong;
  };

  const [QuestionNumArr, setQuestionNumArr] = React.useState(ran());

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const Url = () => {
    if (currentQuestion < QuestionNumArr.length) {
      return idExercise.idExercise
        ? "https://my-json-server.typicode.com/gtl-201/serverJson" +
        "/exerciseUnit" +
        idExercise.idExercise +
        "DB?id=" +
        QuestionNumArr[currentQuestion]
        : null;
    } else {
      return (
        "https://my-json-server.typicode.com/gtl-201/serverJson" +
        "/exerciseUnit" +
        idExercise.idExercise +
        "DB"
      );
    }
  };

  //START FETCH JSON
  const [isLoading, setLoading] = useState(true);
  const [Exercise, setData] = useState([]);

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

  const Next = (
    <Button
      title="Tiếp Tục"
      onPress={() => {
        setIsRigh('');
      }}
      raised
      buttonStyle={[tailwind('bg-green-700'), { backgroundColor: "#00ce00" }]}
      containerStyle={tailwind('w-full mt-5 rounded-lg')}
      titleStyle={tailwind('text-xl')}
    />
  );

  //Anh-Viet monitor
  const [WrongChoose, onChangeWrongChoose] = React.useState(randomWrong());
  const [randomIndex, onChangeRandomIndex] = React.useState(
    Math.floor(Math.random() * (4 + 0))
  );

  const renderWrongAnswerAv = ({item = any}) => {
    return (
      <View>
        {numWrong[0] == item.id ||
          numWrong[1] == item.id ||
          numWrong[2] == item.id ||
          numWrong[3] == item.id ||
          numWrong[4] == item.id ||
          numWrong[5] == item.id ||
          numWrong[6] == item.id ||
          numWrong[7] == item.id ||
          numWrong[8] == item.id ||
          numWrong[9] == item.id ?
          <TouchableOpacity onPress={() => TTSP(item.eng)} style={[tailwind('mx-5 my-2 px-3 py-2 rounded-xl bg-white justify-center items-center'), styles.shadow2]}>
            <Text style={tailwind('text-xl text-red-600')}>{item.eng}</Text>
            <Text style={tailwind('text-xl text-gray-600')}>😭 {item.na} 😭</Text>
            <Text style={tailwind('text-xl text-green-600')}>{item.vi}</Text>
          </TouchableOpacity> : null
        }
      </View>
    )
  }
  const [eng, setEng] = useState('')
  const [isrigh, setIsRigh] = useState('')
  const [nextQest, setNextQest] = useState(false)
  const [vi, setVi] = useState('')
  const [na, setNa] = useState('')
  const [id, setId] = useState('')
  const NextQUESTIONautoRan = () => {
    setNextQest(false);
    if (isrigh == 'true') {
      numRight.push(id)
    } else if (isrigh == 'false') {
      numWrong.push(id)
    }
    onChangeRandomIndex(Math.floor(Math.random() * (4 + 0)));
    setCurrentQuestion(currentQuestion + 1);
    Url();
    setLoading(true);
    put();
  }

  const renderItemAV = ({item = any}) => {
    // console.log(currentQuestion)
    // console.log(QuestionNumArr.length)
    return (
      <View style={tailwind('pt-7 h-full')}>
        {
          randomIndex == 0 ?
            <View style={tailwind('px-3')}>
              <TouchableOpacity onPress={() => TTSP(item.eng)}>
                <Text style={tailwind('text-green-900 text-center text-2xl font-bold')}>{item.eng} 🔊</Text>
              </TouchableOpacity>
              <Text style={tailwind('text-center text-gray-500 text-lg')}>/{item.na}/</Text>
              <Text style={tailwind('text-center text-xl text-red-600 capitalize mt-1')}>--= tab to your answer =--</Text>
              <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('true'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('true') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.vi}</Text></TouchableOpacity>
              <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[1]].content}</Text></TouchableOpacity>
              <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[2]].content}</Text></TouchableOpacity>
              <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[3]].content}</Text></TouchableOpacity>

            </View> : randomIndex == 1 ?
              <View style={tailwind('px-3')}>
                <TouchableOpacity onPress={() => TTSP(item.eng)}>
                  <Text style={tailwind('text-green-900 text-center text-2xl font-bold')}>{item.eng} 🔊</Text>
                </TouchableOpacity>
                <Text style={tailwind('text-center text-gray-500 text-lg')}>/{item.na}/</Text>
                <Text style={tailwind('text-center text-xl text-red-600 capitalize mt-1')}>--= tab to your answer =--</Text>
                <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[1]].content}</Text></TouchableOpacity>
                <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('true'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('true') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.vi}</Text></TouchableOpacity>
                <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[2]].content}</Text></TouchableOpacity>
                <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[3]].content}</Text></TouchableOpacity>

              </View> : randomIndex == 2 ?
                <View style={tailwind('px-3')}>
                  <TouchableOpacity onPress={() => TTSP(item.eng)}>
                    <Text style={tailwind('text-green-900 text-center text-2xl font-bold')}>{item.eng} 🔊</Text>
                  </TouchableOpacity>
                  <Text style={tailwind('text-center text-gray-500 text-lg')}>/{item.na}/</Text>
                  <Text style={tailwind('text-center text-xl text-red-600 capitalize mt-1')}>--= tab to your answer =--</Text>
                  <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[1]].content}</Text></TouchableOpacity>
                  <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[2]].content}</Text></TouchableOpacity>
                  <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('true'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('true') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.vi}</Text></TouchableOpacity>
                  <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[3]].content}</Text></TouchableOpacity>

                </View> : randomIndex == 3 ?
                  <View style={tailwind('px-3')}>
                    <TouchableOpacity onPress={() => TTSP(item.eng)}>
                      <Text style={tailwind('text-green-900 text-center text-2xl font-bold')}>{item.eng} 🔊</Text>
                    </TouchableOpacity>
                    <Text style={tailwind('text-center text-gray-500 text-lg')}>/{item.na}/</Text>
                    <Text style={tailwind('text-center text-xl text-red-600 capitalize mt-1')}>--= tab to your answer =--</Text>
                    <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[1]].content}</Text></TouchableOpacity>
                    <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[2]].content}</Text></TouchableOpacity>
                    <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('false'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('false') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.wrongVi[WrongChoose[3]].content}</Text></TouchableOpacity>
                    <TouchableOpacity style={[tailwind('px-5 my-1 bg-white rounded-lg border-2 border-gray-300'), { paddingVertical: 7 }]} onPress={() => { play('true'), setVi(item.vi), setNa(item.na), setId(item.id), setEng(item.eng), setNextQest(true), setIsRigh('true') }}><Text style={[tailwind('text-left text-xl text-black font-bold capitalize')]}>{item.vi}</Text></TouchableOpacity>
                  </View> : null
        }
        {nextQest == true && NextQUESTIONautoRan()}
        {
          isrigh == 'false' ?
            <View style={[{ flex: 1 }, tailwind('absolute bg-white w-full h-full px-3 p-4')]}>
              <Text style={tailwind('opacity-0')}>
              </Text>
              <TouchableOpacity onPress={() => TTSP(eng)} style={tailwind('border-2 border-red-600 rounded-xl bg-red-200 px-5 pt-2 justify-center items-center')}>
                <Text style={tailwind('text-xl text-center capitalize pb-3')}>sai rồi phải là <Text style={[tailwind('text-green-500 font-bold'), { color: "#f35a00" }]}>{vi}</Text> nhé</Text>
                <Text style={[tailwind('text-xl text-center capitalize pb-1'), { color: "red" }]}>{na}</Text>
                <View style={tailwind('flex-row justify-center w-full')}>
                  {/* <Text style={tailwind('text-3xl mt-2')}>pUồN</Text> */}
                  <Image style={[tailwind(''), { height: 100, width: 100 }]} source={{
                    uri:
                      "https://i.pinimg.com/originals/06/a9/71/06a9710220271892169d285f7b993742.png",
                  }} />
                  {/* <Text style={tailwind('text-3xl mt-2')}>PuỒn</Text> */}
                </View>
              </TouchableOpacity>
              {Next}
            </View>
            : isrigh == 'true' ?
              <View style={[{ flex: 1 }, tailwind('absolute bg-white w-full h-full px-3 p-4')]}>
                <Text style={tailwind('opacity-0')}>
                </Text>
                <TouchableOpacity onPress={() => TTSP(eng)} style={tailwind('border-2 rounded-xl border-green-400 rounded-xl bg-green-200 px-5 pt-2 justify-center items-center')}>
                  <Text style={tailwind('text-xl text-center capitalize pb-3')}>Dảk dảk Bủn bủn Đúng roài</Text>
                  <Text style={[tailwind('text-green-500 font-bold capitalize text-xl'), { color: "#f35a00" }]}>{vi}</Text>
                  {/* <Text style={[tailwind('text-green-500 font-bold text-lg'), { color: "#f35a00" }]}>{item.eng}</Text> */}
                  <Text style={[tailwind('text-xl text-center capitalize pb-1'), { color: "red" }]}>{na}</Text>
                  <View style={tailwind('flex-row justify-center w-full')}>
                    {/* <Text style={tailwind('text-3xl mt-2')}>pUồN</Text> */}
                    <Image style={[tailwind(''), { height: 100, width: 100 }]} source={{
                      uri:
                        "https://i.pinimg.com/originals/4d/26/83/4d2683793138a73fa25e57773006f3c0.png",
                    }} />
                    {/* <Text style={tailwind('text-3xl mt-2')}>PuỒn</Text> */}
                  </View>
                </TouchableOpacity>
                {Next}
              </View>
              : null
        }
      </View>
    )
  }
  //End Anh-Viet monitor
  return (
    <View style={[{ flex: 1 }]}>
      {currentQuestion < QuestionNumArr.length ?
        <FlatList
          data={Exercise}
          renderItem={(item) => renderItemAV(item)}
          keyExtractor={item => item.id}
          contentContainerStyle={[tailwind('h-full')]}
        /> :
        <ScrollView>
          {Result}
          <FlatList
            data={Exercise}
            renderItem={(item) => renderWrongAnswerAv(item)}
            keyExtractor={item => item.id}
            contentContainerStyle={tailwind('pb-2 h-full')}
          />
        </ScrollView>
      }
      {/* {console.log(Exercise)} */}
      {/* {console.log(QuestionNumArr)} */}
      {/* {console.log(currentQuestion)} */}
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
  },
  shadow2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})

export default ExerciseEach;