import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe: Recipe = new Recipe("Panquecas", "Descripcion de las panquecas", "https://goo.gl/oH31R4");
  @Output() selectRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe (recipe: Recipe) {
    this.selectRecipe.emit(recipe);
  }

}
