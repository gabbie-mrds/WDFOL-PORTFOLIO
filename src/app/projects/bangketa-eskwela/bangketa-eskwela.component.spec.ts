import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangketaEskwelaComponent } from './bangketa-eskwela.component';

describe('BangketaEskwelaComponent', () => {
  let component: BangketaEskwelaComponent;
  let fixture: ComponentFixture<BangketaEskwelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BangketaEskwelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangketaEskwelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
