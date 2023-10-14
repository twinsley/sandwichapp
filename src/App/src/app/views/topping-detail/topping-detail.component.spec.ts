import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingDetailComponent } from './topping-detail.component';

describe('ToppingDetailComponent', () => {
  let component: ToppingDetailComponent;
  let fixture: ComponentFixture<ToppingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
