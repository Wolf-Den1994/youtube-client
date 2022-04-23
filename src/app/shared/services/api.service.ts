import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVideoHttp } from '../../models/youtube-http.model';
import { PathQuery } from '../../utils/constants';
import { IVideo } from '../../models/youtube-video.model';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  getVideosId(searchValue: string): Observable<IVideoHttp> {
    return this.http.get<IVideoHttp>(`${PathQuery.Search}&q=${searchValue}`);
  }

  getVideoItems(itemIds: string[]): Observable<IVideo> {
    return this.http.get<IVideo>(`${PathQuery.Videos}&id=${itemIds.join(',')}`);
  }
}
