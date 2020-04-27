import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveComponent } from './live.component';
import { SafeUrlPipe } from '../safe-url.pipe';
import { LivePlayComponent } from './live-play/live-play.component';
import { LiveRoutingModule } from './live-routing.module';



@NgModule({
  declarations: [LiveComponent,
    SafeUrlPipe,
    LivePlayComponent],
  imports: [
    CommonModule,
    LiveRoutingModule
  ],
  exports: [LiveComponent]
})
export class LiveModule { }
