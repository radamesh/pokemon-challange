import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Pokemons } from 'src/model/pokemons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemons: Pokemons
  isLoadingResults =  true
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getPokemon(this.route.snapshot.params['name'])
  }

  getPokemon(name) {
    this.api.getPokemon(name)
    .subscribe(data => {
      this.pokemons = data
      console.log(this.pokemons)
      this.isLoadingResults = false
    })
  }

}