import { Component, OnInit } from '@angular/core';

import { Post, Comment } from 'src/interfaces/post-service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  comments: {[postId: number]: Comment[]} = {};
  showComments: { [postId: number]: boolean } = {};

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this._postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Failed to fetch posts', error);
      }
    );
  }

  toggleComments(postId: number) {
    if (this.showComments[postId]) {
      this.showComments[postId] = false;
    } else {
      this.fetchComments(postId);
      this.showComments[postId] = true;
    }
  }

  fetchComments(postId: number) {
    this._postService.getComments(postId)
      .subscribe(
        (data) => {
          this.comments[postId] = data;
        },
        (error) => {
          console.error(`Failed to fetch comments for post ${postId}`, error);
        }
      );
    }
}
