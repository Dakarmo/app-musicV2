import { Component } from '@angular/core';
import { Album } from '../album';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

export class AlbumsComponent {

  title = "Page Principale Albums";
  Albums = ALBUMS;

  /**
   * Variable qui détermine l'album dont on veut voir le détails
   * @param album 
   */
  selectedAlbum?: Album = undefined;

  onSelect(album: Album){
    this.selectedAlbum = album;
  }
}
