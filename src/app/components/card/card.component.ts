import { Component, OnInit, Input } from '@angular/core';

import { CardService } from '../../services/card.service';

import { Card } from '../../models/Card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor(private cardService: CardService) {

  }

  ngOnInit() {


  }

}
