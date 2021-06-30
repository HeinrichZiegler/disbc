import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutDuttonComponent } from './about/about-dutton/about-dutton.component';
import { AboutIonaComponent } from './about/about-iona/about-iona.component';
import { AboutMediaComponent } from './about/about-media/about-media.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPastorComponent } from './about/about-pastor/about-pastor.component';
import { AboutLinksComponent } from './about/about-links/about-links.component';
import { MinistryMenComponent } from './ministry/ministry-men/ministry-men.component';
import { MinistryWomenComponent } from './ministry/ministry-women/ministry-women.component';
import { MinistrySundayComponent } from './ministry/ministry-sunday/ministry-sunday.component';
import { MinistryYouthComponent } from './ministry/ministry-youth/ministry-youth.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { SermonListsComponent } from './sermon/sermon-lists/sermon-lists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutEventsComponent } from './about/about-events/about-events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';// other import definitions@NgModule({ imports: [BrowserAnimationsModule // other imports]})
import { LiveModule } from './live/live/live.module';
import { XmasComponent } from './xmas/xmas.component';
import { LiveGroupComponent } from './live/live-group/live-group.component';
import { LiveGroupModule } from './live/live-group/live-group.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutIonaComponent,
    HomeComponent,
    AboutDuttonComponent,
    AboutMediaComponent,
    AboutPastorComponent,
    AboutLinksComponent,
    MinistryMenComponent,
    MinistryWomenComponent,
    MinistrySundayComponent,
    MinistryYouthComponent,
    ContactUsComponent,
    SermonListsComponent,
    AboutEventsComponent,
    XmasComponent,
    LiveGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    LiveModule,
    LiveGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
