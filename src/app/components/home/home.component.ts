import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Artist } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  sort = "spain";
  artists!: Array<Artist>;
  routeSub!: Subscription;
  artistSub!: Subscription;

  constructor(
    private httpService: HttpService,
    private activatedRote: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.routeSub = this.activatedRote.params.subscribe((params: Params) => {
      if (params['artist-search']) {
        this.searchArtists('spain', params['artist-search']);
      }
      else {
        this.searchArtists('spain');
      }
    });
  }

  searchArtists(
    sort: string, search?: string
  ): void {
    this.artistSub = this.httpService
      .getArtistList(sort, search)
      .subscribe((artistList: APIResponse<Artist>) => {
        if (search) {
          this.artists = artistList.topartists.artist.filter(artist =>
            artist.name.toLocaleLowerCase().includes(search.toLowerCase()));
        }
        else {
          this.artists = artistList.topartists.artist;
          //console.log(artistList);
          console.log(this.artists);
        }
      });

  }

  openDetailView(mbid: string): void {
    this.router.navigate(['details', mbid]);
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
