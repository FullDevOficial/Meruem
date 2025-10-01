import { Component } from '@angular/core';
import { NavMenu } from "../../shared/components/nav-menu/nav-menu";
import { Footer } from "../../shared/components/footer/footer";
import { Button } from "../../shared/components/button/button";

@Component({
  selector: 'app-sobre',
  imports: [NavMenu, Footer, Button],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {}
