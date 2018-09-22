import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { DateFilter } from 'ag-grid-community';


@Component({
  selector: 'app-exchanges',
  templateUrl: './exchanges.component.html',
  styleUrls: ['./exchanges.component.scss']
})
export class ExchangesComponent implements OnInit {

  columnDefs = [
    { headerName: 'Name', field: 'name', checkboxSelection: true, headerCheckboxSelection: true },
    { headerName: 'Exchange ID', field: 'exchange_id'},
    { headerName: 'Website', field: 'website' },
    { headerName: 'Trade Count', field: 'data_trade_count' },
    { headerName: 'Symbols Count', field: 'data_symbols_count' },
    { headerName: 'Order Book Start', field: 'data_orderbook_start', },
    { headerName: 'Order Book Start', field: 'data_orderbook_end' },
    { headerName: 'Quote Start', field: 'data_quote_start' },
    { headerName: 'Quote End', field: 'data_quote_end' }
  ];

  rowData = [];


  constructor(private _cryptoService: CryptoService) { }

  ngOnInit() {
    this._cryptoService.getLatestCryptoCurrencies().subscribe(
      res => {
        this.processForGrid(res);
      }
    )
  }

  processForGrid(data) {
    data.forEach(item => {
      let rowObj = {
        name: item.name,
        exchange_id: item.exchange_id,
        website: item.website,
        data_trade_count: item.data_trade_count,
        data_symbols_count: item.data_symbols_count,
        data_orderbook_start: item.data_orderbook_start,
        data_orderbook_end: item.data_orderbook_end,
        data_quote_start: item.data_quote_start,
        data_quote_end: item.data_quote_end
      }

      this.rowData.push(rowObj);
    });

  }
}
