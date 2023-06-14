import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoProdutosComponent } from './carrinho-produtos.component';

describe('CarrinhoProdutosComponent', () => {
  let component: CarrinhoProdutosComponent;
  let fixture: ComponentFixture<CarrinhoProdutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrinhoProdutosComponent]
    });
    fixture = TestBed.createComponent(CarrinhoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
