import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.scss']
})
export class MycompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let Name: String ;
    Name = "Hello";
    console.log(Name);
  }

}
