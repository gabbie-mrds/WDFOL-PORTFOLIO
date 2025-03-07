import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieCornerComponent } from './cookie-corner.component';

describe('CookieCornerComponent', () => {
  let component: CookieCornerComponent;
  let fixture: ComponentFixture<CookieCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieCornerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
