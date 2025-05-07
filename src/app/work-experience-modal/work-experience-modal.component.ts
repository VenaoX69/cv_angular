import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-work-experience-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience-modal.component.html',
  styleUrl: './work-experience-modal.component.scss',
})
export class WorkExperienceModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @HostListener('document: keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    if (this.showModal){
      this.closeModal.emit()
    }
  }

  workExperience = [
    {
      company: 'CodeSKills',
      description:
        '6-months internship focused on developing portafolio and Rpa project, implementing the CQRS design pattern using .NET(C#), and working with stored procedures in SQL Server. Additionally, completed a 1-month contract to develop and RPA solution.',
      time: 'October 1 of 2024 to May 2 of 2025'
      },
    {
      company: 'SenaSoft',
      description:
        'SenaSoft Cali 2024 Olympiad - Participated in the Open Development: In a team of two, we developed a solution to a challenge presented by the sponsor, IBM SkillsBuild, during a 4-day business-focused event.',
      time: 'September 23 of 2024 to September 28 of 2024'
      },
    {
      company: 'Tributi',
      description:
        'Assisting clients with inconsistencies in income tax returns.',
      time: 'July 01 of 2022 to October 18 2022'
      },
  ];

  onCloseModal() {
    this.closeModal.emit();
  }
}
