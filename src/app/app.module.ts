import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './video-list/video/video.component';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from './pipes/number-format.pipe';
import { VideoListComponent } from './video-list/video-list.component';
import { HomeComponent } from './home/home.component';
import { SkeletonDirective } from './directives/skeleton.directive';


@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    NumberFormatPipe,
    VideoListComponent,
    HomeComponent,
    SkeletonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
