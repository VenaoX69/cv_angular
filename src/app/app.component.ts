import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicInfoModalComponent } from "./basic-info-modal/basic-info-modal.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SkillsModalComponent } from "./skills-modal/skills-modal.component";
import { ProjectsModalComponent } from "./projects-modal/projects-modal.component";
import { WorkExperienceModalComponent } from "./work-experience-modal/work-experience-modal.component";

declare var bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BasicInfoModalComponent,
    SkillsModalComponent,
    ProjectsModalComponent,
    WorkExperienceModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Verificar si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
      tooltips.forEach((tooltip) => {
        new bootstrap.Tooltip(tooltip);
      });
    }
  }

  name = 'Daniel Henao Rivera';
  githubUrl = 'https://github.com/VenaoX69';
  linkedinUrl = 'https://www.linkedin.com/in/daniel-henao-rivera-64371a26a';
  photoUrl = '/imgenes/img.png';

  //-------------------------------------------

  showModalBasicInf: boolean = false;

  onShowModalBasicInf() {
    this.showModalBasicInf = true;
  }

  onCloseModalBasicInf() {
    this.showModalBasicInf = false;
  }

  //----------------------------------------------
  showModalSkills: boolean = false;

  onShowModalSkills() {
    this.showModalSkills = true;
  }

  onCloseModalSkills() {
    this.showModalSkills = false;
  }

  //-----------------------------------------------

  showModalProjects: boolean = false;

  onShowModalProjects() {
    this.showModalProjects = true;
  }
  onCloseModalProjects() {
    this.showModalProjects = false;
  }

  //-----------------------------------------------

  showModalWorkExperience: boolean = false;

  onShowModalWorkExperience() {
    this.showModalWorkExperience = true;
  }
  onCloseModalWorkExperience() {
    this.showModalWorkExperience = false;
  }

  // --------------------------


}
