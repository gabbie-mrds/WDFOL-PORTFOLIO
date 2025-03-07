import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CookieCornerComponent } from './projects/cookie-corner/cookie-corner.component';
import { GabbieeatsComponent } from './projects/gabbieeats/gabbieeats.component';
import { GnbComponent } from './projects/gnb/gnb.component';
import { TowerGroundComponent } from './projects/tower-ground/tower-ground.component';

export const routes: Routes = [
    {path: '', title: 'GMRDS | HOME', component: HomeComponent},
    {path: 'about', title: 'GMRDS | ABOUT', component: AboutComponent},
    {path: 'projects', title: 'GMRDS | PROJECTS', component: ProjectsComponent},
    {path: 'contact', title: 'GMRDS | CONTACT', component: ContactComponent},
    {path: 'cookie-corner', title: 'GMRDS | COOKIE CORNER', component: CookieCornerComponent},
    {path: 'gabbieeats', title: 'GMRDS | GABBIEEATS' , component: GabbieeatsComponent},
    {path: 'gnb', title: 'GMRDS | GREENS N BEANS', component: GnbComponent},
    {path: 'towerground', title: 'GMRDS | TOWER GROUND', component: TowerGroundComponent}
];
