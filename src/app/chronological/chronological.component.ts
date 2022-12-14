import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel, Category } from '../models';
import { renderSingleGroupsInUI } from '../utils-helper';

@Component({
  selector: 'app-chronological',
  templateUrl: './chronological.component.html',
  styleUrls: ['./chronological.component.css']
})
export class ChronologicalComponent implements OnInit {

  data: ArchDataModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = arData;
    this.sortData();
  }

  sortData(): void {
    let BC = this.data.filter(d => d.yearBuilt[d.yearBuilt.length -1] === 'C');
    let AD = this.data.filter(d => d.yearBuilt[d.yearBuilt.length -1] !== 'C');

    AD = AD.sort((a, b) => a.id - b.id);
    const grouped = AD.reduce(function (r, a) {
      const yearBuilt = ((a.yearBuilt).split('-')[0]).padStart(4, "0");
      let century = yearBuilt.substring(0, 2) + '00s';
      r[century] = r[century] || [];
      r[century].push(a);
      return r;
    }, Object.create(null));

    let arrGroup: [string, any][] = Object.entries(grouped);
    const ar1 = arrGroup[19][1].slice(0, 15);
    const ar2 = arrGroup[19][1].slice(15);
    arrGroup[19] = ["1900s", ar1];
    const insertAr = ["1950s", ar2];

    let sortedGroup = [...arrGroup, insertAr].sort((a, b) => a[0].localeCompare(b[0]));
    sortedGroup = [["BC", BC], ...sortedGroup];
    const sortedObjGroup = Object.fromEntries(sortedGroup);
    renderSingleGroupsInUI(sortedObjGroup, Category.CHRONOLOGICAL);
  }
}
