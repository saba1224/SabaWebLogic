import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCompComponent } from './your-comp.component';

describe('YourCompComponent', () => {
  let component: YourCompComponent;
  let fixture: ComponentFixture<YourCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
