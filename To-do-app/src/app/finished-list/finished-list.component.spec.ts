import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedListComponent } from './finished-list.component';

describe('FinishedListComponent', () => {
  let component: FinishedListComponent;
  let fixture: ComponentFixture<FinishedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinishedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
