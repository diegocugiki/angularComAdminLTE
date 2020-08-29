import { AlunoComponent } from './aluno/aluno.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';


const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {
        path: 'alunos',
        component: AlunoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
