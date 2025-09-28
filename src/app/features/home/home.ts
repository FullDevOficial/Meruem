import { Component } from '@angular/core';
import { Grupos } from "../grupos/grupos";

@Component({
  selector: 'app-home',
  imports: [Grupos],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
