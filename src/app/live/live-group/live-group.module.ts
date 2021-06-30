import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeUrlPipe } from '../safe-url.pipe';
import { LiveGroupComponent } from './live-group.component';
import { LiveComponent } from '../live/live.component';
import { LiveGroupRoutingModule } from './live-group-routing.module';



@NgModule({
  declarations: [LiveGroupComponent,
    SafeUrlPipe,
    LiveComponent],
  imports: [
    CommonModule,
    LiveGroupRoutingModule
  ],
  exports: [LiveComponent]
})
export class LiveGroupModule { }
