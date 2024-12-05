import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChampionsComponent } from './pages/champions/champions.component';
import { DetailsComponent } from './pages/details/details.component';
import { AuthGuard } from './guards/auth-guard.service';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'champions', component: ChampionsComponent, canActivate: [AuthGuard]},
    {path: 'details', component: DetailsComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
