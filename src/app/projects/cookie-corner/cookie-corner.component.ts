import { Component } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-cookie-corner',
  standalone: true,
  imports: [],
  templateUrl: './cookie-corner.component.html',
  styleUrl: './cookie-corner.component.css'
})
export class CookieCornerComponent {

  ngOnInit(){
        AOS.init();
      }
}
