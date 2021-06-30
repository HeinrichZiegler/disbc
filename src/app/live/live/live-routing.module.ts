import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivePlayComponent } from './live-play/live-play.component';



const routes: Routes = [{
  path: 'videos/theme/:id',
  component: LivePlayComponent
},
{
  path: 'videos/theme/:id/:title',
  component: LivePlayComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveRoutingModule { }

