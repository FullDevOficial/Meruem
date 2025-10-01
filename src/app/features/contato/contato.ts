import { Component } from '@angular/core';
import { NavMenu } from "../../shared/components/nav-menu/nav-menu";
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-contato',
  imports: [NavMenu, Footer],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {}
