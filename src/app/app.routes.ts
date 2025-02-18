import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminTemplateComponent } from './components/admin/admin-template/admin-template.component';

export const routes: Routes = [
    { path : 'home' , component: HomeComponent},
    { path : 'admin' , component: AdminComponent},
    { path : 'adminTemp' , component: AdminTemplateComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }, 
    { path: '**', component: HomeComponent },
];
