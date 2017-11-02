import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Materi1Page} from '../materi1/materi1'
import { Materi2Page} from '../materi2/materi2'
import { Materi3Page} from '../materi3/materi3'


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  home(){
			this.navCtrl.push(HomePage);
	}

  materi1(){
    this.navCtrl.push("Materi1Page");
  }

   materi2(){
    this.navCtrl.push("Materi2Page");
  }

   materi3(){
    this.navCtrl.push("Materi3Page");
  }

}
