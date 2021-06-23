import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useStyles from 'src/hooks/useStyles';
import tailwind from 'tailwind-rn';
import { useStores } from 'src/stores';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import Tts from 'react-native-tts';


type ExerciseEachVaProps = {
  onPressExerciseEachVa?: () => void;
}

const ExerciseEachVa: React.FC<ExerciseEachVaProps> = ({

  onPressExerciseEachVa = () => { },

}) => {
  const { styles } = useStyles(_styles);
  const [DropDownValue, setDropDownValue] = useState('')
  const { idExercise } = useStores();

  //START VA RESULT
  const [numRight, setNumRight] = React.useState([]);
  const [numWrong, setNumWrong] = React.useState([]);

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

  let total = numWrong.length + numRight.length;
  let record = (numRight.length / total) * 100;

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
        Right: {numRight.length}/10
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
        setcheckRight('');
        setCurrentQuestion(currentQuestion + 1);
        Url();
        setLoading(true);
        put();
        // console.log(Math.floor(Math.random() * (4 + 0)))
        // console.log('aaaa')
        // onChangeTextVi(null);
      }}
      raised
      buttonStyle={[tailwind('bg-green-700'), { backgroundColor: "#00ce00" }]}
      containerStyle={tailwind('w-full mt-5 rounded-lg absolute bottom-0')}
      titleStyle={tailwind('text-xl')}
    />
  );



  //Anh-Viet monitor
  const renderWrongAnswerVa = ({ item = '' }) => {
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
  const [text, setText] = useState('')

  //START Guide View
  const [string, setString] = useState('')
  const [Guide, setGuide] = React.useState(false);
  const usingArrayFrom = Array.from(string);
  const [ranIndex1, onchangeRanIndex1] = React.useState(
    Math.floor(Math.random() * (10 + 0))
  );
  const [ranIndex2, onchangeRanIndex2] = React.useState(
    Math.floor(Math.random() * (10 + 0))
  );
  const [ranIndex3, onchangeRanIndex3] = React.useState(
    Math.floor(Math.random() * (10 + 0))
  );
  // console.log(ranIndex1);
  // console.log(ranIndex2);
  // console.log(ranIndex3);
  let i = 0;
  let TextTmp = "";
  const [textt, onChangeTextt] = React.useState(null);
  for (i = 0; i < string.length; i++) {
    if (ranIndex1 == i || ranIndex2 == i || ranIndex3 == i) {
      TextTmp = TextTmp.concat(usingArrayFrom[i]);
    } else {
      TextTmp = TextTmp.concat("_");
    }
  }

  const GuideViewer = (
    <TouchableOpacity onPress={() => TTSP(string)} style={tailwind('text-center flex-row items-center justify-center')}>
      <Icon name={'pulse'} size={25} style={tailwind('mr-1 text-red-600')} />
      <Text style={[tailwind('text-center text-xl text-blue-500 font-bold mb-1'), { letterSpacing: 2 }]}>
        {TextTmp}
      </Text>
      <Icon name={'pulse'} size={25} style={tailwind('ml-1 text-red-600')} />
    </TouchableOpacity>
  );
  //END GUIDE VIEW

  //CHECK ANSWER
  const [checkRight, setcheckRight] = useState('')
  const [id, setId] = useState(Number)
  const Checking = () => {
    text == string ? setcheckRight('1') : setcheckRight('0');
    // console.log(text + " < AND > " + string);
    text == string ? numRight.push(id) : numWrong.push(id)
  }
  //END CHECK ANSWER

  const renderItemVa = ({ item = '' }) => {
    // console.log(currentQuestion)
    // console.log(QuestionNumArr.length)
    setString(item.eng)
    setId(item.id)
    return (
      checkRight == '' ?
        <View style={tailwind('pt-7 h-full relative')}>
          <Text style={tailwind('mx-3 text-center text-2xl font-bold mb-3')}>{item.vi}</Text>
          {Guide != false && GuideViewer}
          <TextInput onChangeText={(text) => setText(text)} placeholder="Type Your Answer" style={[tailwind('mx-3 rounded-xl bg-white py-2 px-3 text-xl mb-10 text-red-400'), styles.shadow]} />
          <TouchableOpacity onPress={() => setGuide(!Guide)} style={tailwind('absolute right-5 bottom-10')}>
            <Icon name={'eye-outline'} size={25} color='#f75b12'></Icon>
          </TouchableOpacity>
          <Button
            title="check"
            containerStyle={tailwind('absolute w-full bottom-0')}
            raised
            titleStyle={tailwind('font-bold capitalize text-xl')}
            buttonStyle={[{ backgroundColor: "#00ce00" }, tailwind('py-1')]}
            onPress={() => { Checking() }}
          >
          </Button>

        </View>
        : checkRight == '0' ?
          <View style={tailwind('pt-7 h-full relative justify-center')}>
            <TouchableOpacity onPress={() => TTSP(string)} style={tailwind('-mt-20 mx-5 border-2 border-red-600 rounded-xl bg-red-200 px-5 pt-2 justify-center items-center')}>
              <Text style={tailwind('text-xl text-center capitalize pb-3')}>sai rồi phải là <Text style={[tailwind('text-green-500 font-bold'), { color: "#f35a00" }]}>{item.eng}</Text> nhé</Text>
              <Text style={[tailwind('text-xl text-center capitalize pb-1'), { color: "red" }]}>{item.na}</Text>
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
          : checkRight == '1' ?
            <View style={tailwind('pt-7 h-full relative justify-center')}>
              <TouchableOpacity onPress={() => TTSP(string)} style={[tailwind('-mt-20 mx-5 border-2 border-green-400 rounded-xl bg-green-200 px-5 pt-2 justify-center items-center'), { backgroundColor: "#2bff2b45", borderColor: "#00d600d4" }]}>
                <Text style={tailwind('text-xl text-center capitalize pb-2')}>Dảk dảk Bủn bủn Đúng roài</Text>
                <Text style={[tailwind('text-xl text-center capitalize'), { color: "#ff5e00" }]}>{item.na}</Text>
                <Text style={[tailwind('text-xl text-center capitalize pb-1'), { color: "#ff5e00" }]}>{item.vi}</Text>
                {/* <View style={tailwind('flex-row justify-between items-center w-full')}> */}
                {/* <Text style={tailwind('text-3xl mt-2')}>🐉pUồN</Text> */}
                <Image style={[tailwind(''), { height: 100, width: 100 }]} source={{
                  uri:
                    "https://i.pinimg.com/originals/4d/26/83/4d2683793138a73fa25e57773006f3c0.png",
                }} />
                {/* <Text style={tailwind('text-3xl mt-2')}>PuỒn🐉</Text> */}
                {/* </View> */}
              </TouchableOpacity>
              {Next}
            </View> : null
    )
  }
  //End Anh-Viet monitor
  return (
    <View style={[{ flex: 1 }]}>
      {currentQuestion < QuestionNumArr.length ?
        <FlatList
          data={Exercise}
          renderItem={(item) => renderItemVa(item)}
          keyExtractor={item => item.id}
          contentContainerStyle={[tailwind('h-full')]}
        /> :
        <ScrollView>
          {Result}
          <FlatList
            data={Exercise}
            renderItem={(item) => renderWrongAnswerVa(item)}
            keyExtractor={item => item.id}
            contentContainerStyle={tailwind('h-full')}
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

export default ExerciseEachVa;