import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-gabbieeats',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './gabbieeats.component.html',
  styleUrl: './gabbieeats.component.css'
})
export class GabbieeatsComponent {
  ngOnInit(){
        AOS.init();
      }
}
