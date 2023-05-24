import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfStockproductComponent } from './out-of-stockproduct.component';

describe('OutOfStockproductComponent', () => {
  let component: OutOfStockproductComponent;
  let fixture: ComponentFixture<OutOfStockproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutOfStockproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutOfStockproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
