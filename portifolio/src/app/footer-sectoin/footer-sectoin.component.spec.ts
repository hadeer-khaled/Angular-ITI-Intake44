import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSectoinComponent } from './footer-sectoin.component';

describe('FooterSectoinComponent', () => {
  let component: FooterSectoinComponent;
  let fixture: ComponentFixture<FooterSectoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSectoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSectoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
