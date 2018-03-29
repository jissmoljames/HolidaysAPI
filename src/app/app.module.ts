import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';


import { DatasourceService } from './datasource.service';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatListModule, 
    MatIconModule, 
    MatButtonModule, 
    MatSidenavModule,
    RouterModule.forRoot([
      { path: 'list', component: ListComponent },
      { path: 'detail/:date', component: DetailComponent },
      { path: '**', redirectTo: 'list' }
    ])
  ],
  providers: [DatasourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
