import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import the NewPageComponent
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products/electronics/mobile-phones', component:MobilePhonesComponent},
  { path: '**', redirectTo: '/home' } // Redirect unmatched routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule loaded');
  }
}
