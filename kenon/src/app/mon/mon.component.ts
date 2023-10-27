import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Root } from './emon.model';

@Component({
  selector: 'app-mon',
  templateUrl: './mon.component.html',
  styleUrls: ['./mon.component.css']
})
export class MonComponent {
  routeObs!: Observable<ParamMap>
  obs!: Observable<Object>
  poke!:Root
  constructor(private router:ActivatedRoute,
              private http:HttpClient){

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
        this.obs = this.http.get("https://pokeapi.co/api/v2/pokemon/"+pok)
        this.obs.subscribe((data:any)=>this.poke=data)
    }
    
  }
}
