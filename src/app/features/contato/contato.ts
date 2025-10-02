import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer';
import { NavMenuComponent } from '../../shared/components/nav-menu/nav-menu';

@Component({
  selector: 'app-contato',
  imports: [NavMenuComponent, FooterComponent],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class ContatoComponent {}
