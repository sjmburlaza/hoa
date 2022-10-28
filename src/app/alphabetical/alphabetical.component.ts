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
    console.log(this.data)
    this.sortData();
  }

  sortData(): void {
    const arData = this.data.sort((a, b) => a.name.localeCompare(b.name))
    const grouped = arData.reduce(function (r, a) {
      let letter = (a.name)[0]
      r[letter] = r[letter] || [];
      r[letter].push(a);
      return r;
    }, Object.create(null));

    console.log(grouped);

    this.renderAlphsInUI(grouped);
  }

  renderAlphsInUI(grouped: any): void {
    for (let key in grouped) {
      let li = document.createElement("li"); 
      li.classList.add('list-group-item');
      li.style.width = "5vw";
      const outerUl = document.getElementById("outerUl");
      if (outerUl) {
        outerUl.appendChild(li);
      }

      const alphUl = document.getElementById("alphUl");
      if (alphUl) {
        let li = document.createElement("li"); 
        li.innerHTML = key;
        li.style.width = "5vw";
        alphUl.appendChild(li);
      }

      let ul = document.createElement("ul"); 

      for (let group of grouped[key]) { 
        let li = document.createElement("li"); 
        li.innerHTML = group['code'];
        li.style.borderStyle = "solid";
        li.style.marginTop = "5px";
        li.style.textAlign = "center"
        li.style.fontSize = "1vw";
        ul.append(li);
      }
      li.append(ul);
      ul.style.listStyle = "none";
      ul.style.margin = "0";
      ul.style.padding = "0";
      
    }
  }
  
}
