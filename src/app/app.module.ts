import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AlbumDetailComponent } from './album-details/album-detail/album-detail.component';
import { IconButtonComponent } from './icon-button/icon-button/icon-button.component';



@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailComponent,
    IconButtonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
