import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.page.html',
  styleUrls: ['./list-characters.page.scss'],
})

export class ListCharactersPage implements OnInit {

  characters: any = [];

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.characterService.getCharacters().subscribe(bikes => {
      console.log("hola");
      console.log(bikes);
      this.characters = bikes;
    })
  }

  addCharacter() {
    this.router.navigateByUrl("/add-character");
  }

}
