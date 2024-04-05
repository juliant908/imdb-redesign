import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCardHorizontalComponent } from './title-card-horizontal.component';

describe('TitleCardHorizontalComponent', () => {
  let component: TitleCardHorizontalComponent;
  let fixture: ComponentFixture<TitleCardHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCardHorizontalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleCardHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
