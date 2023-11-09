import { Observable } from "rxjs/internal/Observable"

export interface Post {
    userId: number
    id: number
    title: string 
    body:string
}

export interface Comment {
    postId: number
    id: number
    name: string
    email: string 
    body:string
}
  
export interface IPostService {
    getPosts(): Observable<Post[]>
    getComments(postId: number): Observable<Comment[]>
}
  