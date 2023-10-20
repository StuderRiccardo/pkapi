import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeComponent } from './poke/poke.component';


const routes: Routes = [
  {path:'poke/:id',component: PokeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
