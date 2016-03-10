import {Component, Storage, LocalStorage} from 'ionic/ionic';

@Component({
  selector: 'local-storage-helper'
});
export class LocalStorageHelper{
  constructor(){
    this.local = new Storage(LocalStorage);
  }
  setCharacters(char){
    if(typeof char != 'undefined' && typeof char != 'array'){
      this.local.set('char', JSON.stringfy(char));
    }
  }
  getCharacters(){
    return JSON.parse(this.local.get('char'));
  }
  pushCharacter(char){
    var array = JSON.parse(this.local.get('char'));
    if(typeof char != 'undefined'){
      array.push(char);
      this.local.set('char', array);
    }
  }
}
