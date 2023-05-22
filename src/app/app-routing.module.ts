import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';

import { LibrosComponent } from './page/libros/libros.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registro',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  
  {path:'libro',component:LibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
