import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  catName: string;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getCatName()
  }

  getCatName() {
    this.catName = this.route.snapshot.paramMap.get('cat');
  }
}
