import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';

import { ContactComponent } from './contact/contact.component';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';



  
const appRoutes:Routes=[
  {
    path:"",component:IndexComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"about",component:AboutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
