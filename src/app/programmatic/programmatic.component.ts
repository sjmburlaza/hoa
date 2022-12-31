import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel, Category, Programmatic } from '../models';
import { divideArray, findArr, renderSingleGroupsInUI } from '../utils-helper';

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

    let arrGroup: [string, any][] = Object.entries(grouped);

    const cultural = divideArray(findArr(arrGroup, Programmatic.CULTURAL), Programmatic.CULTURAL, 10);
    const religious = divideArray(findArr(arrGroup, Programmatic.RELIGIOUS), Programmatic.RELIGIOUS, 12);
    const residential = divideArray(findArr(arrGroup, Programmatic.RESIDENTIAL), Programmatic.RESIDENTIAL, 10);

    arrGroup = [
      arrGroup[0], 
      ...cultural, 
      arrGroup[2], 
      arrGroup[3], 
      arrGroup[4], 
      arrGroup[5],
      ...religious,
      ...residential,
      arrGroup[8]
    ];
    const objGroup = Object.fromEntries(arrGroup);
    renderSingleGroupsInUI(objGroup, Category.PROGRAMMATIC);
  }

}
