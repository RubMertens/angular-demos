import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-directive-examples',
  templateUrl: './using-directive-examples.component.html',
  styleUrls: ['./using-directive-examples.component.scss']
})
export class UsingDirectiveExamplesComponent implements OnInit {


  list = [
    'one',
    'two',
    'three',
    'four'
  ];

  toggle = false;
  constructor() { }

  ngOnInit(): void {
  }

  switchToggle() {
    this.toggle = !this.toggle;
  }

  addToList() {
    this.list.push('new value');
  }

}
