import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Comment, IPostService, Post } from 'src/interfaces/post-service';
import { PostsEndpoints } from '../networking/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PostService implements IPostService {

  constructor(private _httpService: HttpClient) {}
  
  getPosts(): Observable<Post[]> {
    return this._httpService.get<Post[]>(`${environment.API_HOST}${PostsEndpoints.GET_POSTS}`)
  }

  getComments(postId: number): Observable<Comment[]> {
    return this._httpService.get<Comment[]>(`${environment.API_HOST}${PostsEndpoints.GET_COMMENTS.replace('postId', `${postId}`)}`)
  }
}
