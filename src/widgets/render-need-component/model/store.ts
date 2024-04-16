import { makeAutoObservable } from 'mobx';



class Store {
    percentage = 0;
    step = 1;
    constructor() {
        makeAutoObservable(this);
    }
    prevStep(){
        --this.step;
        this.percentage = Math.floor(((this.step - 1 ) / 2 ) * 100);
    }
    nextStep(){
        this.percentage = Math.floor((this.step / 2 ) * 100) ;
        ++this.step;
    }
}
export const stepStore = new Store();