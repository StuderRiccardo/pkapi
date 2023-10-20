import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { Pokemon, Root } from './son.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kenon';
  pokemonlist !: Pokemon[];
  obs !: Observable<Root>; 
  constructor(private http : HttpClient){
    this.obs = this.http.get<Root>('https://pokeapi.co/api/v2/type')
    this.obs.subscribe(this.show)
  }
  show= (data:any)=>{
    this.pokemonlist = data.results
  }

  getlastpart(url: string){
    const part = url.split('/')
    return part.at(-2)
  }
    
  

}
