import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CookieCornerComponent } from './projects/cookie-corner/cookie-corner.component';

export const routes: Routes = [
    {path: '', title: 'GMRDS | HOME', component: HomeComponent},
    {path: 'about', title: 'GMRDS | ABOUT', component: AboutComponent},
    {path: 'projects', title: 'GMRDS | PROJECTS', component: ProjectsComponent},
    {path: 'contact', title: 'GMRDS | CONTACT', component: ContactComponent},
    {path: 'cookie-corner', title: 'GMRDS | COOKIE CORNER', component: CookieCornerComponent}

];
