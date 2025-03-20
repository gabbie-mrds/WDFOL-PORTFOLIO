import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  ngOnInit(){
      AOS.init();
    }

  certs = [
    {
      img: 'comptia-cert.png',
      certName: 'CompTIA IT Fundamentals'
    },
    {
      img: 'free-code-web-design.png',
      certName: 'freeCodeCamp | Responsive Web Design'
    },
    {
      img: 'freecode-js.png',
      certName: 'freeCodeCamp | Legacy Javascript Algorithms & Data Structures'
    },
    {
      img: 'cisco-itn-cert.png',
      certName: 'Cisco | Introduction to Networks'
    },
    {
      img: 'cisco-cybersec-cert.png',
      certName: 'Cisco | Cybersecurity Essentials'
    },
    {
      img: 'cisco-cyber-threat-cert.png',
      certName: 'Cisco | Cyber Threat Management'
    },
    {
      img: 'seo-cert.png',
      certName: 'Hubspot | SEO'
    },
    {
      img: 'seo2-cert.png',
      certName: 'Hubspot | SEO II'
    },
    {
      img: 'google-analytics-cert.png',
      certName: 'Google Analytics Certificate'
    },
  ]

}
