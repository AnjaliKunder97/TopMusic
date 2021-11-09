import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Artist } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-artistcomparison',
  templateUrl: './artistcomparison.component.html',
  styleUrls: ['./artistcomparison.component.scss']
})
export class ArtistcomparisonComponent implements OnInit {
  artistName1!: string;
  artistName2!: string;
  artist1!: Artist;
  artist2!: Artist;
  //routeSub!: Subscription;
  artist1Sub!: Subscription;
  artist2Sub!: Subscription;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {

  }

  getArtist1Info(name: string): void {
    this.artist1Sub = this.httpService
      .getArtist1Info(name)
      .subscribe((artistResp: Artist) => {
        this.artist1 = artistResp;
        console.log(this.artist1);
        //this.tracks=this.artist.toptracks.track;
      });
  }
  getArtist2Info(name: string): void {
    this.artist2Sub = this.httpService
      .getArtist2Info(name)
      .subscribe((artistResp: Artist) => {
        this.artist2 = artistResp;
        console.log(this.artist2);
        //this.tracks=this.artist.toptracks.track;
      });
  }
  ngOnDestroy(): void {
    if (this.artist1Sub) {
      this.artist1Sub.unsubscribe();
    }
    if (this.artist2Sub) {
      this.artist2Sub.unsubscribe();
    }
  }
  onCompare1(form1: NgForm) {
    this.artistName1 = form1.value.compareArtist1.toLowerCase();
    console.log(this.artistName1);
    this.getArtist1Info(this.artistName1);
  }
  onCompare2(form2: NgForm) {
    this.artistName2 = form2.value.compareArtist2.toLowerCase();
    console.log(this.artistName2);
    this.getArtist2Info(this.artistName2);
  }
}
