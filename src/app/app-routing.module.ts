import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangesComponent } from './components/exchanges/exchanges.component';
import { AssetsComponent } from './components/assets/assets.component';
import { SymbolsComponent } from './components/symbols/symbols.component';


const routes: Routes = [
  { path: '', redirectTo: '/exchanges', pathMatch: 'full' },
  { path: 'exchanges', component: ExchangesComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'symbols', component: SymbolsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}