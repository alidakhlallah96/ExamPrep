import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';
import {GalleryDetailComponent} from './app/gallery-detail/gallery-detail.component';
import {GalleryListComponent} from './app/gallery-list/gallery-list.component';
import {AboutComponent} from './app/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/art', pathMatch: 'full' },
  { path: 'art', component: GalleryListComponent },
  { path: 'art/:id', component: GalleryDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(() => console.log('Bootstrap successful!'));
