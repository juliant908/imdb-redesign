import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCardVerticalComponent } from './title-card-vertical.component';

describe('TitleCardVerticalComponent', () => {
  let component: TitleCardVerticalComponent;
  let fixture: ComponentFixture<TitleCardVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCardVerticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleCardVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
