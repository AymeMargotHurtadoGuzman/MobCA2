import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ApiService} from '../../services/api.service';

export enum SearchType{
    all='',
    episode_id = 'episode_id',   
    series = 'series',
}

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})



export class EpisodesPage implements OnInit {

  episodes: Observable<any>;
  searchTerm='';
  type : SearchType = SearchType.all;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
     this.episodes = this.api.getEpisodes();
     this.episodes.subscribe(data=>{
         console.log('My data: ',data)
     })
  }

 openDetails(episode) {
      let episodeId = episode.episode_id;      
      this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
  }

 searchChanges(){
      this.episodes = this.api.searchData(this.searchTerm, this.type);
      this.episodes.subscribe(data=>{
         console.log('My data: ',data)
     })

  } 
}
