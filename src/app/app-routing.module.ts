import { ExpensesResolver } from './expenses.resolver';
import { OnlyMeGuard } from './only-me.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'expenses', loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule),
    canActivate: [OnlyMeGuard],
    resolve: {
      expenses: ExpensesResolver
    }
  },
  { path: 'unauthorized', component: NotAuthorizedComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
