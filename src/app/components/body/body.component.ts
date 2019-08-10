import { Component, OnInit, Input } from '@angular/core';

import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';

import { PostImg } from 'src/app/models/PostImg';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  postImgs: PostImg[];
  users: User[];

  // private postService: PostService,
  constructor(private userService: UserService) {

    // this.cards = [{ "id": 1, "avatar": "fakeurl", "image": "anotherFakeUrl", "username": "lisa", "comments": ["hello", 2, 3] }]
  }

  ngOnInit() {
    // this.postService.getPostImg().subscribe(images => {
    //   this.postImgs = images;
    //   console.log('THIS', this.postImgs)
    // })
    this.userService.getUser().subscribe
      (users => {
        console.log('USER', users)
        // this.users = users;
        // console.log('USER', this.users)
      }
      )
  }

}
