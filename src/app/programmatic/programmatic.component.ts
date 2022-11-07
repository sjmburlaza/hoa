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

    console.log(grouped)

    renderGroupsInUI(grouped);
  }

}
