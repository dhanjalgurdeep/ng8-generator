import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DycomponentComponent } from './dycomponent.component';

describe('DycomponentComponent', () => {
  let component: DycomponentComponent;
  let fixture: ComponentFixture<DycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
