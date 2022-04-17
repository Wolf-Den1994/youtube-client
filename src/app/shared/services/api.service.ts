import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVideoHttp } from '../../youtube/models/youtube-http.model';
import { Query, URL_VIDEO, URL_VIDEOS } from '../../../utils/constants';
import { IVideo } from '../../youtube/models/youtube-video.model';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  getVideosId(searchValue: string): Observable<IVideoHttp> {
    return this.http.get<IVideoHttp>(`${URL_VIDEO}&q=${searchValue}`);
  }

  getVideoItems(itemIds: string[]): Observable<IVideo> {
    return this.http.get<IVideo>(`${URL_VIDEOS}&id=${itemIds.join(',')}&part=${Query.Part}`);
  }
}
