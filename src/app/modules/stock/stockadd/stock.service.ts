import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { StockAdd } from './stock-add';
import { Stock } from './stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(private http: HttpClient) { }

  //http: any;
  //this: any;
  get() {
    return this.http.get<Stock[]>("http://localhost:3000/stock");
    //throw new Error('Method not implemented.');
  }
create (stock:StockAdd)
{
  return this.http.post("http://localhost:3000/stock",stock);

}


  /*constructor(private http: HttpClient) { }

  addStockItem(stock: Stock): Observable<Stock> {
    return this.http.post<Stock>(`${this.apiUrl}/add`, stock);
    */
  }

