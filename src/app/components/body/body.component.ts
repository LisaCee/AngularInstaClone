import { Component, OnInit, Input } from '@angular/core';

import { CardService } from '../../services/card.service';

import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) {

    this.cards = [{ "id": 1, "avatar": "fakeurl", "image": "anotherFakeUrl", "username": "lisa", "comments": ["hello", 2, 3] }]
  }

  ngOnInit() {
  }

}
