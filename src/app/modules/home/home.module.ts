import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HighlightItemDirective } from 'src/app/highlight-item.directive';



@NgModule({
  declarations: [
    HighlightItemDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
