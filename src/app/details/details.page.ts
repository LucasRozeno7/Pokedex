import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any;
  public isLoading: boolean = false;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getPokemon;
  }

 get getPokemon(){
  const id = this.activatedRoute.snapshot.params['id'];
  const pokemon = this.httpService.apiGetPokemons(`${this.urlPokemon}/${id}`);
  const name = this.httpService.apiGetPokemons(`${this.urlName}/${id}`); 

  return forkJoin([pokemon, name]).subscribe(
    res =>{
     this.pokemon = res;
     this.isLoading = true
     console.log(res)
    }
  );
  
  
 }
 
 public brilhante: boolean = true
 

 change(){
  return
 }

 public genero: boolean = true

 mudar(){
  return
 }




}
