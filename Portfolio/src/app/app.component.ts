import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortifolioSectionComponent } from './portifolio-section/portifolio-section.component';
import { FooterSectoinComponent } from './footer-sectoin/footer-sectoin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    PortifolioSectionComponent,
    FooterSectoinComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portifolio';
}
