import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './side-bar/about-us/about-us.component';
import { ContactUsComponent } from './side-bar/contact-us/contact-us.component';
import { HomeComponent } from './side-bar/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, data: { title: 'Dragon - Home' }
  },
  {
    path: 'about', component: AboutUsComponent, data: { title: 'Dragon - About Us' }
  },
  {
    path: 'contact', component: ContactUsComponent, data: { title: 'Dragon - Contact Us' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
