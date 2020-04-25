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

  var_limit=0;
  var_offset=10;

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

  loadPage(event){
      this.deaths = this.api.getDeathPages(this.var_limit,this.var_offset);
      this.deaths.subscribe(data=>{
         console.log('My data: ',data)
     })
     
     if(event){
         event.target.complete();
     }

  }

  loadData(event){
    console.log(event);
    this.var_limit = this.var_limit + this.var_offset;
    this.loadPage(event);
  }

}
