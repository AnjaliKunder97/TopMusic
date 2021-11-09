import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/models';

@Component({
  selector: 'app-toptracks',
  templateUrl: './toptracks.component.html',
  styleUrls: ['./toptracks.component.scss']
})
export class ToptracksComponent implements OnInit {
  @Input() artist!: Artist;
  constructor() { }

  ngOnInit(): void {
  }

}
