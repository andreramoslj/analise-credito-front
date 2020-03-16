import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnaliseCreditoComponent } from './update-analiseCredito.component';

describe('UpdateAnaliseCreditoComponent', () => {
  let component: UpdateAnaliseCreditoComponent;
  let fixture: ComponentFixture<UpdateAnaliseCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAnaliseCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAnaliseCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
