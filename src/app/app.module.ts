import { DataApiService } from './services/http/data-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LinkifyPipe } from './pipes/linkify.pipe';
import { HeaderComponent } from './pages/header/header.component';
import { ExperimentosComponent } from './pages/experimentos/experimentos.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LinkifyPipe,
    HeaderComponent,
    ExperimentosComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
