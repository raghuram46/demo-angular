import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  title = "Welcome to Angular";

  name = "";

  clickme = true;

  constructor() { 
    setTimeout(() => {
      this.clickme = false;
    }, 2000);
  }

  changeTitle (){
    this.title = "Welcome to My World!!"
  }

  ngOnInit(): void {
  }

}
