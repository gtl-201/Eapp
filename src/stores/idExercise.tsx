import { observable, action, makeObservable } from 'mobx';

class IdStudent {
  constructor() { makeObservable(this) }

  @observable idExercise: string | undefined = '';

    @action setidExercise(id = ''){
        this.idExercise = id
    }
    @action rmidExercise(){
        this.idExercise = ''
    }

}

export default new IdStudent();