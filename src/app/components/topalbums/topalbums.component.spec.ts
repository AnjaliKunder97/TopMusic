import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopalbumsComponent } from './topalbums.component';

describe('TopalbumsComponent', () => {
  let component: TopalbumsComponent;
  let fixture: ComponentFixture<TopalbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopalbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopalbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
