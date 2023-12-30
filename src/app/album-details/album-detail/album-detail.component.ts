import { Component, Input } from '@angular/core';
import { Album } from '../../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  @Input() album: Album | undefined;
}
