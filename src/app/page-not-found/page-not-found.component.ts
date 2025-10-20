import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>404 - Page Not Found</h2>
    <p><a routerLink="/art">Go back to the gallery</a></p>
  `
})
export class PageNotFoundComponent {}
