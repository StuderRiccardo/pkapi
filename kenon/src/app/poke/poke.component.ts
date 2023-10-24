import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent {
  routeObs!:Observable<ParamMap>
  poke !: any
  obs!: Observable<any>  
  constructor(private router:ActivatedRoute,
              private app:AppComponent, 
              private http: HttpClient){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.routeObs = this.router.paramMap;
    this.routeObs.subscribe(this.getRouteParams)
  }

  getRouteParams=(params:ParamMap)=>{
    let pok = params.get('id')
    if(pok != null){
        this.obs = this.http.get("https://pokeapi.co/api/v2/type/"+pok)
        this.obs.subscribe((data:any)=>this.poke=data)
    }
    
  }
}
