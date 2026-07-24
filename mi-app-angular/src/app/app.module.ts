import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { LibraryStatsComponent } from './components/library-stats/library-stats.component';
import { HighlightBookDirective } from './directives/highlight-book.directive';


@NgModule({
  declarations: [AppComponent, BookFormComponent, BookListComponent, BookCardComponent, LibraryStatsComponent, HighlightBookDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
