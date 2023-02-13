import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'pp-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  rows: any[] = [];
  
  constructor() { }

  ngOnInit() {
    this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let i = 0; i<photos.length; i+=3) {
      newRows.push(photos.slice(i, i +3));
    }
    return newRows
  }

}
