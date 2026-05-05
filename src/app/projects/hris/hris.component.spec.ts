import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrisComponent } from './hris.component';

describe('HrisComponent', () => {
  let component: HrisComponent;
  let fixture: ComponentFixture<HrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
