import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-skills-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-modal.component.html',
  styleUrl: './skills-modal.component.scss',
})
export class SkillsModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  skills = [
    { name: 'RPA with Python', iconClass: 'bi bi-robot' },
    {
      name: 'Angular (JSX and TSX)',
      iconClass: 'bi bi-code-slash',
      colorStyle: '#ff0000',
    },
    { name: 'Python (Django, REST APIs)', iconClass: 'bi bi-terminal' },
    { name: 'Java (Spring Boot, REST APIs)', iconClass: 'bi bi-cup-hot' },
    {
      name: '.NET (C#, ASP.NET Core)',
      iconClass: 'bi bi-window-sidebar',
      colorStyle: '#9010ac',
    },
    {
      name: 'DataBases: MySQL, SQL Server, MongoDB',
      iconClass: 'fa fa-database',
    },
    { name: 'Design patterns: CQRS', iconClass: 'bi bi-diagram-3' },
    {
      name: 'Testing: xUnit',
      iconClass: 'bi bi-check2-square',
      colorStyle: '#15c037',
    },
  ];

  onCloseModal() {
    this.closeModal.emit();
  }
}
