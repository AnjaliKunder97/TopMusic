import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Artist } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getArtistList(
    country: string,
    search?: string
  ): Observable<APIResponse<Artist>> {
    let params = new HttpParams().set('country', country);

    if (search) {
      params = new HttpParams().set('country', country).set('search', search);
    }

    return this.http.get<APIResponse<Artist>>(`${env.BASE_URL}?method=geo.gettopartists`,
      {
        params: params,
      });
  }

  getArtistDetails(mbid: string): Observable<Artist> {
    const artistInfoRequest = this.http.get(`${env.BASE_URL}?method=artist.getinfo&mbid=${mbid}`);
    const artistTopTrackRequest = this.http.get(`${env.BASE_URL}?method=artist.gettoptracks&mbid=${mbid}`);
    const artistTopAlbumRequest = this.http.get(`${env.BASE_URL}?method=artist.gettopalbums&mbid=${mbid}`);

    return forkJoin({
      artistInfoRequest,
      artistTopTrackRequest,
      artistTopAlbumRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['artistInfoRequest'].artist,
          toptracks: resp['artistTopTrackRequest'].toptracks,
          topalbums: resp['artistTopAlbumRequest'].topalbums,
        };
      }));
  }
  getArtist1Info(name: string): Observable<Artist> {
    const artist1req = this.http.get(`${env.BASE_URL}?method=artist.getinfo&artist=${name}`)
    return forkJoin({
      artist1req
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['artist1req'].artist,
        };
      }));
  }
  getArtist2Info(name: string): Observable<Artist> {
    const artist2req = this.http.get(`${env.BASE_URL}?method=artist.getinfo&artist=${name}`)
    return forkJoin({
      artist2req
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['artist2req'].artist,
        };
      }));
  }
}
