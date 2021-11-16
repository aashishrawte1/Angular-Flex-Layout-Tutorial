import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFullComponent } from './layouts/layout-full/layout-full.component';
import { LayoutSideComponent } from './layouts/layout-side/layout-side.component';
import { ColExampleComponent } from './pages/col-example/col-example.component';
import { HomeComponent } from './pages/home/home.component';
import { RowExampleComponent } from './pages/row-example/row-example.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutFullComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    component: LayoutSideComponent,
    children: [
      {
        path: 'row-example',
        component: RowExampleComponent
      },
      {
        path: 'col-example',
        component: ColExampleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
