import { NgModule } from '@angular/core';
import { LmComponentLibraryComponent } from './lm-component-library.component';
import { LmButtonComponent } from './lm-button/lm-button.component';
import { LmHeaderComponent } from './lm-header/lm-header.component';
import { LmSearchBarComponent } from './lm-search-bar/lm-search-bar.component';
import { LmCardComponent } from './lm-card/lm-card.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LmComponentLibraryComponent,
    LmButtonComponent,
    LmHeaderComponent,
    LmSearchBarComponent,
    LmCardComponent
  ],
  imports: [
    CommonModule 
  ],
  exports: [
    LmComponentLibraryComponent,
    LmButtonComponent,
    LmHeaderComponent,
    LmSearchBarComponent,
    LmCardComponent
  ]
})
export class LmComponentLibraryModule { }
