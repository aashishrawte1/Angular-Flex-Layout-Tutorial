import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutFullModule } from './layouts/layout-full/layout-full.module';
import { LayoutSideModule } from './layouts/layout-side/layout-side.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutFullModule,
    LayoutSideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
