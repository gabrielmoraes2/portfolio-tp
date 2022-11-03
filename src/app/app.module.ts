import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './shared/material/material.module';
import { SobremimComponent } from './sobremim/sobremim.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
      SobremimComponent,
      NavbarComponent
   ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
