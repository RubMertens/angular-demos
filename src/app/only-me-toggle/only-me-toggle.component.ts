import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-only-me-toggle',
  templateUrl: './only-me-toggle.component.html',
  styleUrls: ['./only-me-toggle.component.scss']
})
export class OnlyMeToggleComponent implements OnInit {

  isMe: boolean;
  constructor() {
    this.isMe = JSON.parse(localStorage.getItem("isMe") ?? "false");
  }

  toggle() {
    localStorage.setItem("isMe", JSON.stringify(!this.isMe));
    this.isMe = !this.isMe;
  }


  ngOnInit(): void {
  }

}
