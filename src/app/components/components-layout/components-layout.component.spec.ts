import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLayoutComponent } from './components-layout.component';

describe('ComponentsLayoutComponent', () => {
  let component: ComponentsLayoutComponent;
  let fixture: ComponentFixture<ComponentsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
