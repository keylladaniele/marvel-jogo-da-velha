import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  
  constructor(private http: HttpClient) { }

  allCharacters: any=[];

  publicKey = 'a5ae98290a71aa3e65e9e72530c60cbc';
  hash = '2f15f9c35a6aa8e18b9e220bf94f6e6e';
  urlApi = `https://gateway.marvel.com/v1/public/characters?limit=6&ts=1000&apikey=${this.publicKey}&hash=${this.hash}`;


  getAllCharacters():Observable<any>{
    return this.http.get<any>(this.urlApi);
    
  } 
  
  getCharacterByName1(characterName:string):Observable<any>
  {
    const characterByNameUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=1&nameStartsWith=${characterName}&ts=1000&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get(characterByNameUrl);
  }

  getCharacterByName2(characterName:string):Observable<any>
  {
    const characterByNameUrl = `https://gateway.marvel.com:443/v1/public/characters?limit=1&nameStartsWith=${characterName}&ts=1000&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get(characterByNameUrl);
  }



}
