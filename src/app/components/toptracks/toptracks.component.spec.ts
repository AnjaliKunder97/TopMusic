import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptracksComponent } from './toptracks.component';

describe('ToptracksComponent', () => {
  let component: ToptracksComponent;
  let fixture: ComponentFixture<ToptracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToptracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
