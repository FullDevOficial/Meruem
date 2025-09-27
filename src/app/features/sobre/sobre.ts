import { Component } from '@angular/core';
import { NavMenu } from "../../shared/components/nav-menu/nav-menu";
import { Footer } from "../../shared/components/footer/footer";

@Component({
  selector: 'app-sobre',
  imports: [NavMenu, Footer],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss'
})
export class Sobre {

}
