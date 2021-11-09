import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistcomparisonComponent } from './artistcomparison.component';

describe('ArtistcomparisonComponent', () => {
  let component: ArtistcomparisonComponent;
  let fixture: ComponentFixture<ArtistcomparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistcomparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistcomparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
