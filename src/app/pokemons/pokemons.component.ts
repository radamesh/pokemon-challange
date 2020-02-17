import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemons } from 'src/model/pokemons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  // displayedColumns: string[] = ['name', 'url']
  dataSource: Pokemons[]
  isLoadingResults = true

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getPokemons()
    .subscribe(data => {
      console.log(data)
      this.dataSource = data
      console.log(this.dataSource)
      this.isLoadingResults = false
    }, err => {
      console.log(err)
      this.isLoadingResults = false
    })
  }

}
