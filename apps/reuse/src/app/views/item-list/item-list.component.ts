import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() items = [];
  constructor() { }

  ngOnInit(): void {
  }

}
