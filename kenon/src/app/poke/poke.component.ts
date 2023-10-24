import { Component } from '@angular/core';
import { Pokemon } from '../son.model';
import { AppComponent } from '../app.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent {
  routeObs!:Observable<ParamMap>
  poke : any
  obs!: Observable<object>
  constructor(private router:ActivatedRoute,
              private app:AppComponent){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.routeObs = this.router.paramMap;
    this.routeObs.subscribe(this.getRouteParams)
  }

  getRouteParams=(params:ParamMap)=>{
    let pok = params.get('path')
    if(pok!=null){
        this.obs = this.app.getlastpart(pok)
    }
    
  }
}
