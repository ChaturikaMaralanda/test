import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAddComponent } from './stock_add.component';

describe('StockaddComponent', () => {
  let component: StockAddComponent;
  let fixture: ComponentFixture<StockAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
