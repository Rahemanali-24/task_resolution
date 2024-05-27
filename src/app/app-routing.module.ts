import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenResolutionComponent } from './screen-resolution/screen-resolution.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenResolutionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
