import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video/:id', component: VideoDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
