import {Page, NavController, NavParams} from 'ionic/ionic';
import {Storage, LocalStorage} from 'ionic/ionic';
import {ItemDetailsPage} from '../item-details/item-details';
import {CharacterRegister} from '../character-register/character-register';

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  constructor(nav: NavController, navParams: NavParams) {
    var context = this;
    context.nav = nav;
    console.log(nav);
    context.characterList = [];

    context.localStorage = new Storage(LocalStorage);
    context.localStorage.get('char').then(function(item){
      console.log('chars:',item);
      var array = item;
      if(typeof array != 'undefined'){
        if(array != null){
          array = JSON.parse(array);
        }else{
          array = [];
        }
      }else{
        array = [];
      }
      context.characterList = array;
    })
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    console.log(this.nav);
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
  openRegister(event) {
    console.log(this.nav);
    this.nav.push(CharacterRegister);
  }
  deleteItem(event, item) {
    var index = this.characterList.indexOf(item);
    if(index > -1){
      this.characterList.splice(index,1);
    };
    this.localStorage.set('char',JSON.stringify(this.characterList));
  }

}
