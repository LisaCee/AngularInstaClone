import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  cards: Card[];

  constructor() { this.cards = [{ "id": 1, "avatar": "fakeurl", "image": "anotherFakeUrl", "username": "lisa" }] }

  ngOnInit() {
  }

}
