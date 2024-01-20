import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  formgrp:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    cardno:new FormControl("",[Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
    exp:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
    cvv:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
  });

  filledData;

  ngOnInit(): void {
    console.log(this.formgrp)
  }

  handleReset(){
    this.formgrp.reset();
  }


  handleSubmit(){
    console.log(this.formgrp);
    this.filledData=this.formgrp.value;
  }


}
