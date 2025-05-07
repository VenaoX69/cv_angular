import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-projects-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-modal.component.html',
  styleUrl: './projects-modal.component.scss',
})
export class ProjectsModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  projects = [
    {
      name: 'E-commerce Platform',
      description:
        'Developed as a team project presented to SENA, moving to productive stage.',
    },
    {
      name: 'Bicycle Lease System',
      description: 'Developed and presented as a duo at SenaSoft Cali 2024.',
    },
    {
      name: 'RPA Automation',
      description: 'Automated data entry in OPA forms.',
    },
  ];

  onCloseModal() {
    this.closeModal.emit();
  }
}
