import { Component } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-tower-ground',
  standalone: true,
  imports: [],
  templateUrl: './tower-ground.component.html',
  styleUrl: './tower-ground.component.css'
})
export class TowerGroundComponent {
  ngOnInit(){
          AOS.init();
        }
}
