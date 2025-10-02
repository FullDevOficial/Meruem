import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './grupos.html',
  styleUrl: './grupos.scss',
})
export class GruposComponent {
  @Input() src: 'fulldev.png' | 'codequeens.png' = 'fulldev.png';
  @Input() parentType: 'home' | 'modal' = 'home';
  @Input() showIcon = false;
}
