import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurruntStockProductComponent } from './currunt-stock-product.component';

describe('CurruntStockProductComponent', () => {
  let component: CurruntStockProductComponent;
  let fixture: ComponentFixture<CurruntStockProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurruntStockProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurruntStockProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
