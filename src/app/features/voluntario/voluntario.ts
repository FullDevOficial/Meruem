import { Component } from '@angular/core';
import { NavMenu } from "../../shared/components/nav-menu/nav-menu";
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-voluntario',
  imports: [NavMenu, Footer],
  templateUrl: './voluntario.html',
  styleUrl: './voluntario.scss'
})
export class Voluntario {

}
