import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.scss']
})
export class SymbolsComponent implements OnInit {

  columnDefs = [
    { headerName: 'Exchange ID', field: 'exchange_id', checkboxSelection: true , headerCheckboxSelection: true},
    { headerName: 'Symbol ID', field: 'symbol_id' },
    { headerName: 'Symbol Type', field: 'symbol_type' },
    { headerName: 'ID Base', field: 'asset_id_base' },
    { headerName: 'ID Quote', field: 'asset_id_quote' },
    { headerName: 'Trade Start Date', field: 'data_trade_start'},
    { headerName: 'Trade End Date', field: 'data_trade_end' },   
    { headerName: 'Order Book Start', field: 'data_orderbook_start' },
    { headerName: 'Order Book Start', field: 'data_orderbook_end' },
    { headerName: 'Quote Start', field: 'data_quote_start' },
    { headerName: 'Quote End', field: 'data_quote_end' }
  ];

  rowData = [];


  constructor(private _cryptoService: CryptoService) { }

  ngOnInit() {
    this._cryptoService.getLatestCryptoSymbols().subscribe(
      res => {
        this.processForGrid(res);
      }
    )
  }

  processForGrid(data) {
    data.forEach(item => {
      let rowObj = {
        exchange_id: item.exchange_id,
        symbol_id: item.symbol_id,
        symbol_type: item.symbol_type,
        asset_id_base : item.asset_id_base,
        asset_id_quote: item.asset_id_quote,
        data_trade_start: item.data_trade_start,
        data_trade_end : item.data_trade_end,
        data_orderbook_start: item.data_orderbook_start,
        data_orderbook_end: item.data_orderbook_end,
        data_quote_start: item.data_quote_start,
        data_quote_end: item.data_quote_end
      }

      this.rowData.push(rowObj);
    });

  }


}
