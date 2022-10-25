import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel } from '../models';

@Component({
  selector: 'app-alphabetical',
  templateUrl: './alphabetical.component.html',
  styleUrls: ['./alphabetical.component.css']
})
export class AlphabeticalComponent implements OnInit {

  data: ArchDataModel[] = [];
  groupedAlphabetically: any;

  constructor(
  ) { }

  ngOnInit(): void {
    this.data = arData;
    this.sortData();
  }

  sortData(): void {
    const grouped = this.data.reduce(function (r, a) {
      let letter = (a.name)[0]
      r[letter] = r[letter] || [];
      r[letter].push(a);
      return r;
    }, Object.create(null));

    console.log(grouped);

    // this.groupedAlphabetically = result;
    this.renderInUI(grouped)
  }

  renderInUI(grouped: any): void {
    for (let key in grouped) {
      // let ul = document.createElement("ul");
      let li = document.createElement("li"); 
      li.innerHTML = key;
      // ul.appendChild(li);
      const outerUl = document.getElementById("outerUl");
      if (outerUl) {
        outerUl.appendChild(li);
      }
      for (let group of grouped[key]) { 
        console.log('i', group)

      }
      
    }
  }

}
