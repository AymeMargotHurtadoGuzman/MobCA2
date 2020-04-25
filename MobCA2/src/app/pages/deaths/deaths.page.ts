import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService} from '../../services/api.service';

export enum SearchType{
    all='',
    name = 'name',   
    deathCount = 'deathCount',
    random = 'random'
}

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
 
  deaths: Observable<any>;
  searchTerm='';
  type : SearchType = SearchType.all;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
     this.deaths = this.api.getDeaths();
     this.deaths.subscribe(data=>{
         console.log('My data: ',data)
     })
  }

 searchChanges(){
      this.deaths = this.api.searchDataDeath(this.searchTerm, this.type);
      this.deaths.subscribe(data=>{
         console.log('My data: ',data)
     })

  } 

}
