import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel } from '../models';
import { renderSingleGroupsInUI } from '../utils-helper';

@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.css']
})
export class AlphabeticalComponent implements OnInit {

  data: ArchDataModel[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
    this.data = arData;
    this.sortData();
  }

  sortData(): void {
    const arData = this.data.sort((a, b) => a.name.localeCompare(b.name));
    const grouped = arData.reduce(function (r, a) {
      let letter = (a.name)[0]
      r[letter] = r[letter] || [];
      r[letter].push(a);
      return r;
    }, Object.create(null));

    renderSingleGroupsInUI(grouped);
  }
  
}
