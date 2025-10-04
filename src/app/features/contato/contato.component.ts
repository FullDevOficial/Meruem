import { Component } from '@angular/core';
import { NavMenuComponent } from "../../shared/components/nav-menu/nav-menu-component";
import { FooterComponent } from "../../shared/components/footer/footer-component";

@Component({
  selector: 'app-contato-component',
  imports: [NavMenuComponent, FooterComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {}
