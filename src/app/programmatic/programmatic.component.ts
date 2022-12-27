import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel } from '../models';
import { renderMultiGroupsInUI } from '../utils-helper';

@Component({
  selector: 'app-programmatic',
  templateUrl: './programmatic.component.html',
  styleUrls: ['./programmatic.component.css']
})
export class ProgrammaticComponent implements OnInit {

  data: ArchDataModel[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
    this.data = arData;
    this.sortData();
  }

  sortData(): void {
    const archData = this.data.sort((a, b) => a.buildingType.localeCompare(b.buildingType));
    const grouped = archData.reduce(function (r, a) {
      let buildingType = a.buildingType
      r[buildingType] = r[buildingType] || [];
      r[buildingType].push(a);
      return r;
    }, Object.create(null));

    // console.log(grouped)
    let arrGroup: [string, any][] = Object.entries(grouped);
    console.log(arrGroup)

    // will revise in the future
    let cultural1 = arrGroup[1][1].slice(0, 10);
    cultural1 = ["Cultural", cultural1];
    let cultural2 = arrGroup[1][1].slice(10);
    cultural2 = ["Cultural2", cultural2];

    let religious1 = arrGroup[6][1].slice(0, 12);
    religious1 = ["Religious", religious1];
    let religious2 = arrGroup[6][1].slice(12, 24);
    religious2 = ["Religious2", religious2];
    let religious3 = arrGroup[6][1].slice(24, 36);
    religious3 = ["Religious3", religious3];
    let religious4 = arrGroup[6][1].slice(36, 48);
    religious4 = ["Religious4", religious4];
    let religious5 = arrGroup[6][1].slice(48);
    religious5 = ["Religious5", religious5];

    let residential1 = arrGroup[7][1].slice(0, 10);
    residential1 = ["Residential", residential1];
    let residential2 = arrGroup[7][1].slice(10);
    residential2 = ["Residential2", residential2];

    arrGroup = [
      arrGroup[0], 
      cultural1, 
      cultural2, 
      arrGroup[2], 
      arrGroup[3], 
      arrGroup[4], 
      arrGroup[5],
      religious1,
      religious2,
      religious3,
      religious4,
      religious5,
      residential1,
      residential2,
      arrGroup[8]
    ];
    const objGroup = Object.fromEntries(arrGroup);

    renderMultiGroupsInUI(objGroup);
  }

}
