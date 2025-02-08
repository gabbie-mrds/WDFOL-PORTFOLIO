import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  darkModeService: DarkModeService = inject(DarkModeService);

  toggleDarkMode(){
    this.darkModeService.updateDarkMode();

    if(this.darkModeService.darkModeSignal() === 'dark'){
      document.body.classList.add('dark-theme');
    }else{
      document.body.classList.remove('dark-theme');
    }
  }
}
