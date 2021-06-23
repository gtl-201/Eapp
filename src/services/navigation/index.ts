import { Navigation } from 'react-native-navigation';
import { Root, BottomTabs, StackWith, Component } from './layout';
import { screens } from './screens';
import NavigationSystem from './system';
import { getTabOptions } from './tabs';

class NavigationService extends NavigationSystem implements IService {
  init = async () => {
    await this.initSystem();
  }

  pushExerciseEach = async (cId: string) => {
    this.push(cId, screens.exerciseEach.id);
  }

  pushExerciseEachVa = async (cId: string) => {
    this.push(cId, screens.exerciseEachVa.id);
  }

  pushListen = async (cId: string) => {
    this.push(cId, screens.listen.id);
  }

  pushLearnEach = async (cId: string) => {
    this.push(cId, screens.learnEach.id);
  }

  pushStoreBook = async (cId: string) => {
    this.push(cId, screens.storeBook.id);
  }

  // showSettings = async () => {
  //   this.show(screens.settings.id);
  // }

  // showAppUpdate = async () => {
  //   this.showOverlay(screens.appUpdates.id);
  // }

  // APP

  startApp = async () => {
    const tabOptions = await getTabOptions();

    Navigation.setRoot(
      Root(
        BottomTabs([
          StackWith(
            Component(screens.home.id),
            { ...tabOptions[0] },
          ),

          StackWith(
            Component(screens.chat.id),
            tabOptions[1],
          ),

          StackWith(
            Component(screens.notification.id),
            tabOptions[2],
          ),



          StackWith(
            Component(screens.activity.id),
            tabOptions[4],
          ),
        ])
      )
    );
  }
}

export default new NavigationService();
