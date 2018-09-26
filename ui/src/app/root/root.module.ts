import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootRoutingModule } from './root-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from '../modules/login/login.component';
import { RootComponent } from './root.component';


@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RootRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
