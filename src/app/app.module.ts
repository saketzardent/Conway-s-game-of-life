import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { WorldComponent } from './world/world.component';


@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    WorldComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
