import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEditDetailComponent } from './menu-edit-detail.component';

describe('MenuEditDetailComponent', () => {
  let component: MenuEditDetailComponent;
  let fixture: ComponentFixture<MenuEditDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEditDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
