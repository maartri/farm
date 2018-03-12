import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NavigationDetailsPage } from '../navigation/navigation-details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [NavigationDetailsPage]
})
export class HomePage {
  
  items: Array<Dto.Item>;
  
  constructor(public navCtrl: NavController) {
    this.items = [
      { title: "PRUNING", description: "How to prune plants?" , imgSrc: "../../assets/imgs/prune.jpg" },
      { title: "TOOLS", description: "What are the most common tools in pruning?", imgSrc: "../../assets/imgs/tools.jpg" }
    ];
  }

  openNavDetailsPage(item: any){
    this.navCtrl.push(NavigationDetailsPage, { item: item });
  }
}
