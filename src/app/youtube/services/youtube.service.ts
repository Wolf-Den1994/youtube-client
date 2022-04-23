import { Injectable } from '@angular/core';
import { IItem } from '../../models/youtube-video.model';

@Injectable({
  providedIn: 'root',
})

export class YoutubeService {
  filter(val: string, list: IItem[]) {
    return list.filter((i) => (~i.snippet.localized.title.indexOf(val)));
  }

  // handleFilterWords(query: string) {
  //   this.items = this.result;
  //   if (query) {
  //     this.items = this.filter(query, this.items);
  //   } else {
  //     this.items = this.result;
  //   }
  // }
}
