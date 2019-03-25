import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3PlaygroundComponent } from './d3-playground.component';

describe('D3PlaygroundComponent', () => {
  let component: D3PlaygroundComponent;
  let fixture: ComponentFixture<D3PlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3PlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
