import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/models';

@Component({
  selector: 'app-topalbums',
  templateUrl: './topalbums.component.html',
  styleUrls: ['./topalbums.component.scss']
})
export class TopalbumsComponent implements OnInit {
  @Input() artist!: Artist
  constructor() { }

  ngOnInit(): void {
  }

}
