import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
import { ProfileComponent } from './page/profile/profile.component';

import { LibrosComponent } from './page/libros/libros.component';
import { AddbookComponent } from './page/addbook/addbook.component';
import { UpdateBooksComponent } from './page/update-books/update-books.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'registro',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  
  {path:'libro',component:LibrosComponent},
  {path:'add',component:AddbookComponent},
  {path:'update',component:UpdateBooksComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
