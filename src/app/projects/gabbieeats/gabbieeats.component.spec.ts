import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabbieeatsComponent } from './gabbieeats.component';

describe('GabbieeatsComponent', () => {
  let component: GabbieeatsComponent;
  let fixture: ComponentFixture<GabbieeatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GabbieeatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GabbieeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
