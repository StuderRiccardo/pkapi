import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeComponent } from './poke/poke.component';
import { MonComponent } from './mon/mon.component';


const routes: Routes = [
  {path:'poke/:id',component: PokeComponent},
  {path:'mon/:id', component:MonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
