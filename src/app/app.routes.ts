import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'champions', component: ChampionsComponent},
    {path: 'details', component: DetailsComponent}
];
