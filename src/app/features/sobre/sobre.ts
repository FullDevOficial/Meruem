import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button';
import { FooterComponent } from '../../shared/components/footer/footer';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu';

@Component({
  selector: 'app-sobre',
  imports: [NavMenuComponent, FooterComponent, ButtonComponent],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class SobreComponent {}
