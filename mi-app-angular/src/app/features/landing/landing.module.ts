import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { NewsletterSectionComponent } from './newsletter-section/newsletter-section.component';

@NgModule({
  declarations: [LandingPageComponent, HeroSectionComponent, FeaturedProductsComponent, NewsletterSectionComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [LandingPageComponent]
})
export class LandingModule {}
