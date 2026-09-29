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

  languages = [
    {
      img: 'logos/html5-logo.png',
      height: '40',
      width:'40'
    },
    {
      img: 'logos/css-logo.png',
      height: '40',
      width:'40'
    },
    {
      img: 'logos/js-logo.webp',
      height: '50',
      width:'50'
    },
    {
      img: 'logos/php-logo.png',
      height: '60',
      width:'60'
    },
    {
      img: 'logos/python-logo.webp',
      height: '40',
      width:'40'
    },
    {
      img: 'logos/java-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/dart-logo.png',
      height: '85',
      width:'85'
    },
  ]


  frontEnd = [
    {
      img: 'logos/react-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/angular-logo.png',
      height: '45',
      width:'45'
    },
    {
      img: 'logos/vuejs-logo.png',
      height: '45',
      width:'45'
    },
    {
      img: 'logos/jquery-logo.png',
      height: '85',
      width:'85'
    },
    {
      img: 'logos/flutter-logo.webp',
      height: '80',
      width:'80'
    },
    {
      img: 'logos/bootstrap.webp',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/tailwind-logo.png',
      height: '120',
      width:'120'
    },
  ]

  backEnd = [
    {
      img: 'logos/nodejs-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/ejs-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/mysql-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/mongodb-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/firebase-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/supabase-logo.png',
      height: '90',
      width:'90'
    },
  ]

  cmsPlatforms = [
    {
      img: 'logos/wordpress-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/shopify-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/joomla-logo.png',
      height: '100',
      width:'100'
    },
    {
      img: 'logos/webflow-logo.webp',
      height: '100',
      width:'100'
    },
  ]

  seoTech = [
    {
      img: 'logos/yoast-logo.png',
      height: '60',
      width:'60'
    },
    {
      img: 'logos/ganalytics-logo.png',
      height: '120',
      width:'120'
    },
    {
      img: 'logos/pagespeed-logo.png',
      height: '50',
      width:'50'
    },
  ]

  

  tools = [
    {
      img: 'logos/figma-logo.png',
      height: '50',
      width:'50'
    },
    {
      img: 'logos/canva-logo.webp',
      height: '80',
      width:'80'
    },
    {
      img: 'logos/git-logo.png',
      height: '50',
      width:'50'
    },
    {
      img: 'logos/github-logo.png',
      height: '50',
      width:'50'
    },
    {
      img: 'logos/linux-logo.png',
      height: '80',
      width:'80'
    },
    {
      img: 'logos/microsoft-office-logo.png',
      height: '80',
      width:'80'
    },
    {
      img: 'logos/Trello-logo.png',
      height: '90',
      width:'90'
    },
    {
      img: 'logos/clickup-logo.png',
      height: '80',
      width:'80'
    },
    {
      img: 'logos/filmora-logo.png',
      height: '80',
      width:'80'
    },
    {
      img: 'logos/capcut-logo.png',
      height: '90',
      width:'90'
    },
  ]
}
