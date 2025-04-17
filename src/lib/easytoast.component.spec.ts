import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasytoastComponent } from './easytoast.component';

describe('EasytoastComponent', () => {
  let component: EasytoastComponent;
  let fixture: ComponentFixture<EasytoastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasytoastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasytoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
