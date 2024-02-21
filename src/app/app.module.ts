import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridAngular } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyLogoRendererComponent } from './company-logo-renderer/company-logo-renderer.component';
import { CommonModule } from '@angular/common';
import { MissionResultRendererComponent } from './mission-result-renderer/mission-result-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyLogoRendererComponent,
    MissionResultRendererComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AgGridAngular,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
