import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {path:' ' , redirectTo:'home' ,pathMatch:'full' },
 { path: 'home',component:DashboardComponent },
 {path:'aboutus',component:AboutusComponent,canActivate:['authGuard']},
 {path: 'contactus', component:ContactusComponent },
 {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
