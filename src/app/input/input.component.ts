import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() placeHolderVal="";
  @Input() classVal="";
  @Input() control:any;
  @Input() idName="";
  @Input() forName="";
  @Input() labels="";

  constructor() { }

  ngOnInit(): void {
  }

}
