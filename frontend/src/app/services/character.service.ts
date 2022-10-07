import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  endPoint = "http://localhost:8080/api/characters";

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    return this.httpClient.get(this.endPoint);
  }

  createCharacter(character, blob) {
    let formData = new FormData();
    formData.append("real_name", character.real_name);
    formData.append("alias", character.alias);
    formData.append("rol", character.rol);
    formData.append("status", character.status);
    formData.append("origin", character.origin);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }

}
