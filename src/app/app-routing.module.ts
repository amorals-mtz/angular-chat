import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  // Redirect from the root to the "/login" prefix (this makes other features,
  // like secondary outlets) easier to implement later on.
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },

  // This is the WILDCARD CATCH-ALL route that is scoped to the entire application.
  // It will catch any request that is not matched by an earlier route definition.
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
