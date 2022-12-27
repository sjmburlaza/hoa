import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel } from '../models';
import { renderSingleGroupsInUI } from '../utils-helper';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {
  
  data: ArchDataModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.data = arData;
    this.sortData();
  }

  ngAfterViewInit(): void {
    
  }

  sortData(): void {
    const archData = this.data.sort((a, b) => a.id - b.id);
    const grouped = archData.reduce(function (r, a) {
      let style = a.style;
      r[style] = r[style] || [];
      r[style].push(a);
      return r;
    }, Object.create(null));

    renderSingleGroupsInUI(grouped);
  }

  
}
