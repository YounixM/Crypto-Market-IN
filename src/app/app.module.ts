import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CryptoService } from './services/crypto.service';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { AssetsComponent } from './components/assets/assets.component';
import { SymbolsComponent } from './components/symbols/symbols.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExchangesComponent,
    AssetsComponent,
    SymbolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
