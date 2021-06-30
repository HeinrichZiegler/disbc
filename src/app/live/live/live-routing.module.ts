import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivePlayComponent } from './live-play/live-play.component';



const routes: Routes = [{
  path: 'videos/play/:id',
  component: LivePlayComponent
},
{
  path: 'videos/play/:id/:title',
  component: LivePlayComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveRoutingModule { }

