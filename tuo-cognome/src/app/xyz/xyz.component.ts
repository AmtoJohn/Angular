import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor() { }
    nome = "secondo"
  ngOnInit(): void {
  }

}
