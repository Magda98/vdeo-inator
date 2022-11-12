import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { CanActivateGuardService } from './auth-guard.service';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [CanActivateGuardService]
  },
  {
    path: 'video/:id', component: VideoDetailsComponent,
    canActivate: [CanActivateGuardService]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
