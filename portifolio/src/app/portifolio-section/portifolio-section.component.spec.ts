import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortifolioSectionComponent } from './portifolio-section.component';

describe('PortifolioSectionComponent', () => {
  let component: PortifolioSectionComponent;
  let fixture: ComponentFixture<PortifolioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortifolioSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortifolioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
