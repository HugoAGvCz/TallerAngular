import { Component } from '@angular/core';
import { RickAndMortyApiService } from '../../service/rick-and-morty-api.service';

@Component({
  selector: 'app-rick-and-morty-page',
  standalone: true,
  imports: [],
  templateUrl: './rick-and-morty-page.component.html',
  styleUrl: './rick-and-morty-page.component.css'
})
export class RickAndMortyPageComponent {

  constructor(private apiRickAndMorty: RickAndMortyApiService) {}

  getCharacters() {
    this.apiRickAndMorty.getCharacter().subscribe(
      res => {
        console.log(res);
      }, 
      err => {
        alert(err)
      }
    )
  }

}

