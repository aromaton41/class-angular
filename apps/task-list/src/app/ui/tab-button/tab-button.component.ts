import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.css'],
})
export class TabButtonComponent {
  @Input() labels: string;
  @Output() fillter = new EventEmitter<string>();
  isclick: boolean = false;
  isActive = 'ALL'

  getfillter(event:string) {  
    this.isActive = event
    this.fillter.emit(event);
    
  }
}
