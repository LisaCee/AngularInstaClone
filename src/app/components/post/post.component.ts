import { Component, OnInit, Input } from '@angular/core';

// import { PostService } from '../../services/post.service';

import { PostImg } from '../../models/PostImg'
import { User } from 'src/app/models/User';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() postImgs: PostImg;
  @Input() users: User;
  @Input() posts: Post;

  constructor() {

  }

  ngOnInit() {
  }

}
