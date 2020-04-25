import { Injectable } from '@angular/core';	
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEpisodes(){
      return this.http.get(`https://8100-a2a0c51a-a776-4105-8084-07674547bcdd.ws-eu01.gitpod.io/assets/episodes.json`);
  }

  getEpisode(id) {   
    return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
  }

  getEpisodesBySeries(serie){
    return this.http.get(`https://www.breakingbadapi.com/api/episodes?series=${serie}`);
  }
 
  searchData(find: string, type: string): Observable<any>{
   
    switch(type) { 
    case "series": { 
        return this.getEpisodesBySeries(find); 
      break; 
    } 
    case "episode_id": { 
       return this.getEpisode(find);  
      break; 
    } 

    default: { 
      return this.getEpisodes();  
      break; 
    } 
    }  
 }

 getCharacters(){
      return this.http.get(`https://8100-a2a0c51a-a776-4105-8084-07674547bcdd.ws-eu01.gitpod.io/assets/characters.json`);
  }

  getCharacter(id) {   
    return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
  }

  getCharactersByCategories(category){
    return this.http.get(`https://www.breakingbadapi.com/api/characters?category=${category}`);
  }

  getCharactersByRandom(){
    return this.http.get(`https://breakingbadapi.com/api/characters/random`);
  }

  getCharactersByName(name){
    return this.http.get(`https://www.breakingbadapi.com/api/characters/?name=${name}`);
  }
 
  searchDataCharacter(find: string, type: string): Observable<any>{

    switch(type) { 
    case "category": { 
        return this.getCharactersByCategories(find); 
      break; 
    } 
    case "name": { 
       return this.getCharactersByName(find);  
      break; 
    }
    case "random": { 
       return this.getCharactersByRandom();  
      break; 
    } 
    case "char_id": { 
       return this.getCharacter(find);  
      break; 
    } 

    default: { 
      return this.getCharacters();  
      break; 
    } 
    } 
 
 }

 getQuotes(){
      return this.http.get(`https://8100-a2a0c51a-a776-4105-8084-07674547bcdd.ws-eu01.gitpod.io/assets/quotes.json`);
  }

  getQuote(id) {   
    return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
  }

  getQuotesByAuthor(author){
    return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${author}`);
  }

  getQuotesByRandom(){
    return this.http.get(`https://breakingbadapi.com/api/quote/random`);
  }

  getQuotesByRandomAuthor(author){
    return this.http.get(`https://www.breakingbadapi.com/api//quote/random?author=${author}`);
  }
 
  searchDataQuote(find: string, type: string): Observable<any>{
   
    switch(type) { 
    case "author": { 
        return this.getQuotesByAuthor(find); 
      break; 
    } 
    case "random_author": { 
       return this.getQuotesByRandomAuthor(find);  
      break; 
    }
    case "random": { 
       return this.getQuotesByRandom();  
      break; 
    } 
    case "quote_id": { 
       return this.getQuote(find);  
      break; 
    } 

    default: { 
      return this.getQuotes();  
      break; 
    } 
    }  
 }
 
 getDeaths(){     
    return this.http.get(`https://8100-a2a0c51a-a776-4105-8084-07674547bcdd.ws-eu01.gitpod.io/assets/deaths.json`);
  }
 
  getDeathsByName(name){
    return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${name}`);
  }

  getDeathsByRandom(){
    return this.http.get(`https://breakingbadapi.com/api/random-death`);
  }

  getDeathsByCount(){
    return this.http.get(`https://breakingbadapi.com/api/death-count`);
  }

  getDeathPages(limit,offset){
      return this.http.get(`https://www.breakingbadapi.com/api/deaths?limit=${limit}&offset=${offset}`);
  }

  searchDataDeath(find: string, type: string): Observable<any>{
   
    switch(type) { 
    case "name": { 
        return this.getDeathsByName(find); 
      break; 
    }    
    case "random": { 
       return this.getDeathsByRandom();  
      break; 
    } 
    case "deathCount": { 
       return this.getDeathsByCount();  
      break; 
    } 

    default: { 
      return this.getDeaths();  
      break; 
    } 
    }  
 }
}
