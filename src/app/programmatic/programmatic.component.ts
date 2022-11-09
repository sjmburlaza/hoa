import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel } from '../models';
import { renderGroupsInUI } from '../utils-helper';

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
    let cultural1 = arrGroup[1][1].slice(0, 15);
    cultural1 = ["cultural1", cultural1];
    let cultural2 = arrGroup[1][1].slice(15);
    cultural2 = ["cultural2", cultural2];
    let religious1 = arrGroup[6][1].slice(0, 15);
    religious1 = ["religious1", religious1];
    let religious2 = arrGroup[6][1].slice(15, 30);
    religious2 = ["religious2", religious2];
    let religious3 = arrGroup[6][1].slice(30, 45);
    religious3 = ["religious3", religious3];
    let religious4 = arrGroup[6][1].slice(45);
    religious4 = ["religious4", religious4];
    let residential1 = arrGroup[7][1].slice(0, 15);
    residential1 = ["residential1", residential1];
    let residential2 = arrGroup[7][1].slice(15);
    residential2 = ["residential2", residential2];

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
      residential1,
      residential2,
      arrGroup[8]
    ];
    const objGroup = Object.fromEntries(arrGroup);

    renderGroupsInUI(objGroup);
  }

}
