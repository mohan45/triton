import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { TableComponent } from './component/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'table', component: TableComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
