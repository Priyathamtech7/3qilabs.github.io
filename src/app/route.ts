import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
export const appRoutes: Routes = [
    {
        path: 'hi', component: NavbarComponent
    }, { path: '', component: DashboardComponent }
]