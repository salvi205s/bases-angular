import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: ICharacter[] = [
    { id: uuid(), name: 'Krillin', power: 1000 },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  addCharacter(character: ICharacter): void {
    // const newCharacter: ICharacter = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    // };

    const newCharacter: ICharacter = {
      ...character,
      id: uuid(),
    };
    this.characters.push(newCharacter);
  }

  deleteCharacerById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
