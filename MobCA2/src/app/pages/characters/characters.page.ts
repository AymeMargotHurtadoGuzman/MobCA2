import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ApiService} from '../../services/api.service';

export enum SearchType{
    all='',
    char_id = 'char_id',   
    category = 'category',
    name = 'name',
    random = 'random'
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Observable<any>;
  searchTerm='';
  type : SearchType = SearchType.all;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
     this.characters = this.api.getCharacters();
     this.characters.subscribe(data=>{
         console.log('My data: ',data)
     })
  }

 openDetails(character) {
      let characterId = character.char_id;  
      this.router.navigateByUrl(`/tabs/characters/${characterId}`);
  }

 searchChanges(){
      this.characters = this.api.searchDataCharacter(this.searchTerm, this.type);
      this.characters.subscribe(data=>{
         console.log('My data: ',data)
     })

  } 
}
