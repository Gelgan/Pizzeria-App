import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  //btn text
  @Input() text: string | undefined ;
  //btn color
  @Input() color: string | undefined; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
