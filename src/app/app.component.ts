import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicInfoModalComponent } from "./basic-info-modal/basic-info-modal.component";
import { CommonModule } from '@angular/common';
import { SkillsModalComponent } from "./skills-modal/skills-modal.component";
import { ProjectsModalComponent } from "./projects-modal/projects-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BasicInfoModalComponent,
    SkillsModalComponent,
    ProjectsModalComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = 'Daniel Henao Rivera';
  githubUrl = 'https://github.com/VenaoX69';
  linkedinUrl = 'https://www.linkedin.com/in/daniel-henao-rivera-64371a26a';
  photoUrl = '/images/img.png';

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


}
