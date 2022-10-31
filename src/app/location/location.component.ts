import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel } from '../models';
import { renderAlphsInUI } from '../utils-helper';

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
    const arData = this.data.sort((a, b) => a.continent.localeCompare(b.continent));
    const grouped = arData.reduce(function (r, a) {
      let continent = a.continent;
      r[continent] = r[continent] || [];
      r[continent].push(a);
      return r;
    }, Object.create(null));

    let arrGroup: [string, any][] = Object.entries(grouped);

    // will revise in the future
    let asia1 = arrGroup[1][1].slice(0, 15);
    asia1 = ["Asia1", asia1];
    let asia2 = arrGroup[1][1].slice(15, 30);
    asia2 = ["Asia2", asia2];
    let asia3 = arrGroup[1][1].slice(30);
    asia3 = ["Asia3", asia3];
    let eur1 = arrGroup[2][1].slice(0, 15);
    eur1 = ["Europe1", eur1];
    let eur2 = arrGroup[2][1].slice(15, 30);
    eur2 = ["Europe2", eur2];
    let eur3 = arrGroup[2][1].slice(30, 45);
    eur3 = ["Europe3", eur3];
    let eur4 = arrGroup[2][1].slice(45, 60);
    eur4 = ["Europe4", eur4];
    let eur5 = arrGroup[2][1].slice(60, 75);
    eur5 = ["Europe5", eur5];
    let eur6 = arrGroup[2][1].slice(75);
    eur6 = ["Europe6", eur6];

    arrGroup = [arrGroup[0], asia1, asia2, asia3, eur1, eur2, eur3, eur4, eur5, eur6, arrGroup[3], arrGroup[4]];
    console.log(arrGroup)
    const objGroup = Object.fromEntries(arrGroup);

    renderAlphsInUI(objGroup);
  }

}
