import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteSlideComponent } from './infinite-slide.component';

describe('InfiniteSlideComponent', () => {
  let component: InfiniteSlideComponent;
  let fixture: ComponentFixture<InfiniteSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiniteSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
