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
import { LiveComponent } from './live/live/live.component';
import { SafeUrlPipe } from './live/safe-url.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';// other import definitions@NgModule({ imports: [BrowserAnimationsModule // other imports]})

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
    LiveComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
