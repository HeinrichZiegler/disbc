import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeUrlPipe } from '../safe-url.pipe';
import { LiveGroupComponent } from './live-group.component';

import { LiveGroupRoutingModule } from './live-group-routing.module';



@NgModule({
  declarations: [LiveGroupComponent],
  imports: [
    CommonModule,
    LiveGroupRoutingModule
  ],
  exports: [LiveGroupComponent]
})
export class LiveGroupModule { }
