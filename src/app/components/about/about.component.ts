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
      lang: "HTML", 
      width: "95%"
    },
    {
      lang: "CSS", 
      width: "90%"
    },
    {
      lang: "JavaScript", 
      width: "70%"
    },
    {
      lang: "PHP", 
      width: "50%"
    },
    {
      lang: "Python", 
      width: "50%"
    },
    {
      lang: "Java", 
      width: "60%"
    },
    {
      lang: "Dart", 
      width: "40%"
    },
  ]


  frameworks = [
    {
      fw: "NodeJS",
      width: "50%"
    },
    {
      fw: "ExpressJS",
      width: "45%"
    },
    {
      fw: "VueJS",
      width: "45%"
    },
    {
      fw: "AngularJS",
      width: "60%"
    },
    {
      fw: "ReactJS",
      width: "30%"
    },
    {
      fw: "Bootstrap",
      width: "65%"
    },
    {
      fw: "Tailwind CSS",
      width: "75%"
    },
  ]


  databases = [
    {
      db: "MySQL",
      width: "35%"
    },
    {
      db: "MongoDB",
      width: "25%"
    },
    {
      db: "Firebase",
      width: "25%"
    },
  ]

  tools = [
    {
      tool: "Microsoft Office",
      width: "97%"
    },
    {
      tool: "Canva",
      width: "95%"
    },
    {
      tool: "Figma",
      width: "65%"
    },
    {
      tool: "Wondershare Filmora",
      width: "80%"
    },
    {
      tool: "Trello",
      width: "60%"
    },
    {
      tool: "Github",
      width: "50%"
    },
  ]

}
