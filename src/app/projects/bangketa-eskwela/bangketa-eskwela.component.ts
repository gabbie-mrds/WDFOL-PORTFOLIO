import { Component } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-bangketa-eskwela',
  standalone: true,
  imports: [],
  templateUrl: './bangketa-eskwela.component.html',
  styleUrl: './bangketa-eskwela.component.css'
})
export class BangketaEskwelaComponent {

  ngOnInit(){
        AOS.init();
      }
}
