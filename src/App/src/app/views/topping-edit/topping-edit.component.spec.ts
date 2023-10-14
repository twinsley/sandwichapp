import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingEditComponent } from './topping-edit.component';

describe('ToppingEditComponent', () => {
  let component: ToppingEditComponent;
  let fixture: ComponentFixture<ToppingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
