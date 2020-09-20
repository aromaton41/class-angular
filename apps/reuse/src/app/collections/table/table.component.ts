import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() classNames ='';

  @Input() data = [];
  @Input() headers = [];

  constructor() { }

  ngOnInit(): void {
  }

}
