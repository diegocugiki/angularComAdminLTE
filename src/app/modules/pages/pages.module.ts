import { ProfessorComponent } from './professor/professor.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {AlunoComponent} from './aluno/aluno.component';
import {LayoutModule} from '../layout/layout.module';


@NgModule({
  declarations: [
    PagesComponent,
    AlunoComponent,
    ProfessorComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ]
})
export class PagesModule {
}
