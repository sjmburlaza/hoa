import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { arData } from '../data';
import { ArchDataModel } from '../models';

@Component({
  selector: 'app-structure-details',
  templateUrl: './structure-details.component.html',
  styleUrls: ['./structure-details.component.css']
})
export class StructureDetailsComponent implements OnInit {

  data: ArchDataModel[] = [];
  arDetail: ArchDataModel | undefined;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.data = arData;
    this.getArDetail();
  }

  getArDetail(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.arDetail = this.data.find(d => d.id === id);
  }

}
