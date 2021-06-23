import HomeScreen from 'src/screens/HomeScreen';
import ChatScreen from 'src/screens/ExerciseScreen';
import NotificationScreen from 'src/screens/LearnAllScreen';
import ActivityScreen from 'src/screens/StoreScreen';
import IdCardScreen from 'src/screens/CommunicateScreen';
import ExerciseEachScreen from 'src/screens/ExerciseAvScreen';
import ExerciseEachVaScreen from 'src/screens/ExerciseVaScreen';
import LearnEachScreen from 'src/screens/LearnEachUnit';
import StoreBookScreen from 'src/screens/StoreBookScreen';
import ListenScreen from 'src/screens/ListenScreen';


import { Buttons } from './buttons';
import { Options } from 'react-native-navigation';

// Here we define all information regarding screens

type Screen = {
  id: string;
  options: () => Options;
}
type ScreenName =
  'home' |
  'chat' |
  'notification' |
  'activity' |
  'idCard' |
  'exerciseEach' |
  'exerciseEachVa' |
  'listen' |
  'learnEach' |
  'storeBook';

const withPrefix = (s: string) => `rnn_starter.${s}`;

const screens: Record<ScreenName, Screen> = {
  home: {
    id: withPrefix('HomeScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'Home',
        },
        visible: false,
        // rightButtons: [Buttons.Inc, Buttons.Dec],
      },
    })
  },
  chat: {
    id: withPrefix('ChatScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'Chat',
        },
        visible: false,
      }
    })
  },
  notification: {
    id: withPrefix('NotificationScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'Notification',
        },
        visible: false
      }
    })
  },
  activity: {
    id: withPrefix('ActivityScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'Activity',
        },
        visible: false,
      }
    })
  },
  idCard: {
    id: withPrefix('IdCard'),
    options: () => ({
      topBar: {
        title: {
          text: 'danh ba',
        },
        visible: false,
      }
    })
  },
  exerciseEach: {
    id: withPrefix('ExerciseEachScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'danh ba',
        },
        visible: false,
      }
    })
  },
  exerciseEachVa: {
    id: withPrefix('ExerciseEachVaScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'danh ba',
        },
        visible: false,
      }
    })
  },
  listen: {
    id: withPrefix('ListenScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'danh ba',
        },
        visible: false,
      }
    })
  },
  learnEach: {
    id: withPrefix('LearnEachScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'danh ba',
        },
        visible: false,
      }
    })
  },
  storeBook: {
    id: withPrefix('StoreBookScreen'),
    options: () => ({
      topBar: {
        title: {
          text: 'danh ba',
        },
        visible: false,
      }
    })
  }


}

const Screens = new Map<string, React.FC<any>>();
Screens.set(screens.home.id, HomeScreen);
Screens.set(screens.chat.id, ChatScreen);
Screens.set(screens.notification.id, NotificationScreen);
Screens.set(screens.activity.id, ActivityScreen);
Screens.set(screens.idCard.id, IdCardScreen);

Screens.set(screens.exerciseEach.id, ExerciseEachScreen);
Screens.set(screens.exerciseEachVa.id, ExerciseEachVaScreen);
Screens.set(screens.listen.id, ListenScreen);

Screens.set(screens.learnEach.id, LearnEachScreen);
Screens.set(screens.storeBook.id, StoreBookScreen);



export default Screens;
export {
  screens,
};