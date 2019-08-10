import { Component, OnInit, Input } from '@angular/core';

import { PostService } from '../../services/post.service';

import { PostImg } from 'src/app/models/PostImg';
import { User } from 'src/app/models/User';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  postImgs: PostImg[];
  users: User[];
  posts: Post[];


  constructor(private postService: PostService) {

  }

  ngOnInit() {
    console.log(this.posts)
    this.postService.getPostImg().subscribe(
      images => {
        this.postImgs = images;
        console.log('postIMG', this.postImgs)
      }
    );

    this.postService.getUser().subscribe(
      users => {
        this.users = users;
        console.log('USER', this.users)
      }
    )

  }

}
