import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Employee/listar/listar.component';
import { AddComponent } from './Employee/add/add.component';
import { DeleteComponent } from './Employee/delete/delete.component';
import { FormsModule } from '@angular/forms';
import {ServiceService} from './Service/service.service';
import { HttpClientModule } from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
