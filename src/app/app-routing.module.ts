import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {PokemonComponent} from './pokemon/pokemon.component'
import {HomeComponent} from './home/home.component'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'


const router: Routes = [
  {path: '',redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'pokemon', component: PokemonComponent},
 
]
@NgModule({

imports: [RouterModule.forRoot(routes)] , 
exports: [RouterModule]],
})
export class AppRoutingModule {}

@NgModule({imports: [BrowserModule, FormsModule, AppRoutingModule]}), 
