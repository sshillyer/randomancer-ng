import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {
  randomVillain: string; // should be a Villain type

  constructor() { }

  ngOnInit() {
  }

}
