import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel, Category, Location } from '../models';
import { divideArray, findArr, renderSingleGroupsInUI } from '../utils-helper';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  data: ArchDataModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = arData;
    this.sortData();
  }

  sortData(): void {
    const archData = this.data.sort((a, b) => a.continent.localeCompare(b.continent));
    const grouped = archData.reduce(function (r, a) {
      let continent = a.continent;
      r[continent] = r[continent] || [];
      r[continent].push(a);
      return r;
    }, Object.create(null));

    let arrGroup: [string, any][] = Object.entries(grouped);
    console.log(arrGroup)

    const asia = divideArray(findArr(arrGroup, Location.ASIA), Location.ASIA, 12);
    const europe = divideArray(findArr(arrGroup, Location.EUROPE), Location.EUROPE, 12);
    
    arrGroup = [arrGroup[0], ...asia, ...europe, arrGroup[3], arrGroup[4]];
    const objGroup = Object.fromEntries(arrGroup);
    renderSingleGroupsInUI(objGroup, Category.LOCATION);
  }

}
