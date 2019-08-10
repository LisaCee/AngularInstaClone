import { Component, OnInit, Input } from '@angular/core';

import { PostService } from '../../services/post.service';

import { PostImg } from '../../models/PostImg'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() postImg: PostImg;

  constructor(private postService: PostService) {

  }

  ngOnInit() {


  }

}
