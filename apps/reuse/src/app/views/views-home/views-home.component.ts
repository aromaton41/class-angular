import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-angular-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value: 22,label:'# of Users'},
    {value: 900,label:"Revenue"},
    {value: 50,label:"Reviews"}
  ];

  items = [
    {
      image: '/assets/images/image01.jpg',
      title: 'Couch',
      description: 'This is a fantastic to sit on'
    },
    {
      image:'/assets/images/image02.jpg',
      title:'Dresser',
      description:'This is a great dresser to put stuf'
    }
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
