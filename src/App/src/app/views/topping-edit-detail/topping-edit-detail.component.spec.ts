import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingEditDetailComponent } from './topping-edit-detail.component';

describe('ToppingEditDetailComponent', () => {
  let component: ToppingEditDetailComponent;
  let fixture: ComponentFixture<ToppingEditDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingEditDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToppingEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
