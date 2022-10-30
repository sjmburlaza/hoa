import { Component, OnInit } from '@angular/core';
import { arData } from '../data';
import { ArchDataModel } from '../models';

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
    console.log(this.data)
    this.sortData();
    // location.reload();
  }

  ngAfterViewInit(): void {
    
  }

  sortData(): void {
    const arData = this.data.sort((a, b) => a.id - b.id);
    const grouped = arData.reduce(function (r, a) {
      let style = a.style;
      r[style] = r[style] || [];
      r[style].push(a);
      return r;
    }, Object.create(null));

    console.log(grouped);
    this.renderAlphsInUI(grouped);
  }

  renderAlphsInUI(grouped: any): void {
    for (let key in grouped) {
      let li = document.createElement("li");
      li.classList.add('list-group-item');
      li.style.width = "4.3vw";
      const outerUl = document.getElementById("outerUl");
      if (outerUl) {
        outerUl.appendChild(li);
      }

      const alphUl = document.getElementById("alphUl");
      if (alphUl) {
        let li = document.createElement("li"); 
        li.innerHTML = key;
        li.style.width = "4.3vw";
        li.style.textAlign = "center"
        li.style.fontSize = "0.8vw";
        alphUl.appendChild(li);
      }

      let ul = document.createElement("ul"); 

      for (let group of grouped[key]) { 
        let li = document.createElement("li"); 
        li.innerHTML = group['codename'];
        li.style.borderStyle = "solid";
        li.style.width = "2vw";
        li.style.marginTop = "5px";
        li.style.fontSize = "0.6vw";
        li.style.textAlign = "center"
        ul.append(li);
      }
      li.append(ul);
      ul.style.listStyle = "none";
      ul.style.margin = "0";
      ul.style.padding = "0";
      
    }
  }
}
