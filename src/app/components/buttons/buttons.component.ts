import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() text!: string;
  @Input() color: string | undefined;
  
  @Output() btnClick = new EventEmitter()

  
  onClick() {
    this.btnClick.emit();  
  }

}
