import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {

    private _url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

  constructor(private _http: HttpClient) {}

  getVideosForChannel(): Observable<Object> {
    return this._http.get(this._url)
      .pipe(map((res) => {
        return res;
      }));
  }

}
