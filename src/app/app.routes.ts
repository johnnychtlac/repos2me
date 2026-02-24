import { Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { CtanComponent } from './component/ctan/ctan.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'ctan', component: CtanComponent }
];
