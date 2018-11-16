import { Component, OnInit } from '@angular/core';
import { Advert } from '../../domain';

@Component({
  selector: 'advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})

export class AdvertComponent implements OnInit {

  public advert : Advert = {};

  constructor() { }

  ngOnInit() {
    
    this.advert.name = "Subway";
    this.advert.information = "STEAK it up a notch with the all new Chioptle Steak Sandwitch";
    this.advert.location = "3426 Oak Lawn Avenue";
    this.advert.link = "https://www.subway.com/en-US/MenuNutrition/Menu";
  }

}
