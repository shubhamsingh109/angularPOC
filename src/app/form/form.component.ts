import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  name = new FormControl('');
  ngOnInit() {
  }

  updateName(){
    this.name.setValue('shubham');
  }

}
