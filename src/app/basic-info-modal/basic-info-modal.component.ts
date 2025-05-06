import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basic-info-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-info-modal.component.html',
  styleUrl: './basic-info-modal.component.scss',
})
export class BasicInfoModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  location = 'Caldas, Antioquia, Colombia';
  email = 'danielhr090@gmail.com';
  phone = '+57 3019047057';

  summary = `Every day brings new opportunities. I want to embrace them and take responsibility
  for them, demonstrating that limits are only a state of mind. I'm currently learning English.
  `;

  onCloseModal() {
    this.closeModal.emit();
  }
}
