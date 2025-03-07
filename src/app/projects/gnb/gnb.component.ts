import { Component } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-gnb',
  standalone: true,
  imports: [],
  templateUrl: './gnb.component.html',
  styleUrl: './gnb.component.css'
})
export class GnbComponent {
  ngOnInit(){
        AOS.init();
      }
}
