import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import * as AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  ngOnInit(){
      AOS.init();
    }

    
  myEmail = "gabmrds@gmail.com";

  public contactForm = {
    name: '',
    email: '',
    message: ''
  };
  submit(){

    if (this.contactForm.name !== '' && this.contactForm.email !== '' && this.contactForm.message !== ''){
      emailjs.send('service_uyiurcj', 'template_68wwrip', {...this.contactForm}, {publicKey: 'rb6nAGDc2qnYbemxY'}).then(() => {
        alert('Your message was successfully submitted!')
      })
      this.contactForm = {
        name: '',
        email: '',
        message: ''
      }
    }else{
      alert("Make sure you have completed the form before sending.")
    }

    
  }
}
