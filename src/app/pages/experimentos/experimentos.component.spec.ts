import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentosComponent } from './experimentos.component';

describe('ExperimentosComponent', () => {
  let component: ExperimentosComponent;
  let fixture: ComponentFixture<ExperimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
