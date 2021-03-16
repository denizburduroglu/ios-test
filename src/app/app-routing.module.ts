import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestIOSComponent } from './test-ios/test-ios.component';

const routes: Routes = [
  { path: 'ios', component: TestIOSComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
