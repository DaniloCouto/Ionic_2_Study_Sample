import {Page, Storage, LocalStorage} from 'ionic/ionic';

@Page({
  template: `<ion-content></ion-content>`
});
export class LocalStorageHelper{
  constructor(){
    this.local = new Storage(LocalStorage);
  }
  setCharacters : function(char){
    if(typeof char != 'undefined' && typeof char != 'array'){
      this.local.set('char', JSON.stringify(char));
    }
  },
  getCharacters : function(){
    return JSON.parse(this.local.get('char'));
  },
  pushCharacter : function(char){
    var array = JSON.parse(this.local.get('char'));
    if(typeof char != 'undefined'){
      array.push(char);
      this.local.setCharacters(array);
    }
  }
}
