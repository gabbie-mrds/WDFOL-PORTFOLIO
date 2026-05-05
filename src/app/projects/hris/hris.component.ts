import { Component } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-hris',
  standalone: true,
  imports: [],
  templateUrl: './hris.component.html',
  styleUrl: './hris.component.css'
})
export class HrisComponent {
  ngOnInit(){
        AOS.init();
      }

}
