import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  publicKey = 'a5ae98290a71aa3e65e9e72530c60cbc';
  hash = '2f15f9c35a6aa8e18b9e220bf94f6e6e';
  urlApi = `http://gateway.marvel.com/v1/public/characters?ts=1000&apikey=${this.publicKey}&hash=${this.hash}`;


  constructor(public http: HttpClient) { }

  getCharacters () : Observable<any> {
    return this.http.get<any>(this.urlApi)
    .pipe(map((dados: any) => dados.dados.results))
    
  } 

}
