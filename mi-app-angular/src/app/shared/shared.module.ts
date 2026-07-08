import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SectionTitleComponent } from './section-title/section-title.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [SectionTitleComponent, ProductCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [SectionTitleComponent, ProductCardComponent]
})
export class SharedModule {}
