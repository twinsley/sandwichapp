import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemComponent } from './menuItem.component';

describe('MenuItemComponent', () => {
  let component: MenuitemComponent;
  let fixture: ComponentFixture<MenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
