import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service.ts.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // public characters: ICharacter[] = [];

  constructor(private dbzService: DbzService) {}

  // ngOnInit(): void {
  //   this.characters = this.dbzService.characters;
  // }

  get characters(): ICharacter[] {
    return [...this.dbzService.characters];
  }

  onNewCharacter(character: ICharacter): void {
    this.dbzService.addCharacter(character);
  }

  onDeleteCharacerById(id: string) {
    this.dbzService.deleteCharacerById(id);
    // this.characters = this.dbzService.characters;
  }
}
