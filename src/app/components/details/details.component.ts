import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Artist, Track } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  artistId!: string;
  artist!: Artist;
  routeSub!: Subscription;
  artistSub!: Subscription;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((params: Params) => {
      this.artistId = params['mbid'];
      this.getArtistDetails(this.artistId);
    });
  }

  getArtistDetails(mbid: string): void {
    this.artistSub = this.httpService
      .getArtistDetails(mbid)
      .subscribe((artistResp: Artist) => {
        this.artist = artistResp;
        //this.tracks=this.artist.toptracks.track;
      });
  }
  ngOnDestroy(): void {
    if (this.artistSub) {
      this.artistSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
