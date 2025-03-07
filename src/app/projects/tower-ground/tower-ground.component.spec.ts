import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerGroundComponent } from './tower-ground.component';

describe('TowerGroundComponent', () => {
  let component: TowerGroundComponent;
  let fixture: ComponentFixture<TowerGroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TowerGroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowerGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
