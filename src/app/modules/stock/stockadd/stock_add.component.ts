import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
import { StockAdd } from './stock-add';
import { Route, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-stockadd',
  templateUrl: './stock_add.component.html',
  styleUrls: ['./stock_add.component.css']
})
export class StockAddComponent implements OnInit {
  stocks: any;
name: any;

  constructor(private stockService: StockService, private router: Router) {}

  ngOnInit(): void {}

  stock: StockAdd = {
    name: '',
    quantity: 0,
    price: 0,
    _id: ''
  };

  create(): void {
    this.stockService.create(this.stock).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
