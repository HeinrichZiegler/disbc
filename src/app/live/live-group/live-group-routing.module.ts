import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveComponent } from '../live/live.component';




const routes: Routes = [{
  path: 'videos/:group',
  component: LiveComponent
},
{
  path: 'videos/:group',
  component: LiveComponent
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveGroupRoutingModule { }

