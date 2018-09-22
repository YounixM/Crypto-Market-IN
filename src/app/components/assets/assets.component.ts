import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  columnDefs = [
    { headerName: 'Name', field: 'name', checkboxSelection: true, headerCheckboxSelection: true, valueFormatter : function(params){
      return params.value[0].toUpperCase() + params.value.slice(1, params.value.length);
    } },
    { headerName: 'Asset ID', field: 'asset_id' },
    {
      headerName: 'Is Crypto', field: 'type_is_crypto', valueFormatter: function (params) {
        if(params.value == 1){
          return "Yes"
        }else{
          return "No"
        }
      }
    },
    { headerName: 'Trade Count', field: 'data_trade_count' },
    { headerName: 'Symbols Count', field: 'data_symbols_count' },
    { headerName: 'Order Book Start', field: 'data_orderbook_start' },
    { headerName: 'Order Book Start', field: 'data_orderbook_end' },
    { headerName: 'Quote Start', field: 'data_quote_start' },
    { headerName: 'Quote End', field: 'data_quote_end' }
  ];

  rowData = [];


  constructor(private _cryptoService: CryptoService) { }

  ngOnInit() {
    this._cryptoService.getLatestCryptoAssets().subscribe(
      res => {
        this.processForGrid(res);
      }
    )
  }

  processForGrid(data) {
    data.forEach(item => {
      let rowObj = {
        name: item.name,
        asset_id: item.asset_id,
        website: item.website,
        type_is_crypto: item.type_is_crypto,
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