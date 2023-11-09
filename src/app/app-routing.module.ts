import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'albums', component: AlbumListComponent },
  // { path: 'albums/photos', component: ... },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
