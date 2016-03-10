import {Page, NavController, NavParams} from 'ionic/ionic';
import {Storage, LocalStorage} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/character-register/character-register.html'
})
export class CharacterRegister {
  constructor(nav: NavController,navParams: NavParams) {
    this.localStorage =  new Storage(LocalStorage);
    this.nav = nav;
    this.actualCharacter = {
      name: "",
      description: "",
      atributes:[
        {name:"Força",value:0},
        {name:"Constuição",value:0},
        {name:"Destreza",value:0},
        {name:"Inteligência",value:0},
        {name:"Sabedoria",value:0},
        {name:"Poder",value:0}
      ],
      expertise:[],
      advantagesAndDesaventages:[]
    }
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  goBack(){
    this.nav.pop();
  }
  registerCharacter(){
    var localStorage = this.localStorage;
    var actualCharacter = this.actualCharacter;
    localStorage.get('char').then(function(item){
      var array = item;
      if(typeof array != 'undefined'){
        if(array != null){
          array = JSON.parse(array);
        }else{
          array = []
        }
      }else{
        array = [];
      }
      if(typeof array == 'object'){
        if(array.length > 0){
            array.push(actualCharacter);
        }else{
            var array = [actualCharacter];
        }
      }else{
        var array = [actualCharacter];
      }
      localStorage.set('char', JSON.stringify(array));

    });
  }
}
