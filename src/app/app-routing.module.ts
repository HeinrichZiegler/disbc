import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutDuttonComponent } from './about/about-dutton/about-dutton.component';
import { AboutIonaComponent } from './about/about-iona/about-iona.component';
import { AboutMediaComponent } from './about/about-media/about-media.component';
import { AboutPastorComponent } from './about/about-pastor/about-pastor.component';
import { AboutLinksComponent } from './about/about-links/about-links.component';
import { MinistryMenComponent } from './ministry/ministry-men/ministry-men.component';
import { MinistryWomenComponent } from './ministry/ministry-women/ministry-women.component';
import { MinistrySundayComponent } from './ministry/ministry-sunday/ministry-sunday.component';
import { MinistryYouthComponent } from './ministry/ministry-youth/ministry-youth.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { SermonListsComponent } from './sermon/sermon-lists/sermon-lists.component';
import { AboutEventsComponent } from './about/about-events/about-events.component';
import { LiveComponent } from './live/live/live.component';
import { XmasComponent } from './xmas/xmas.component';


const routes: Routes = [    {
  path: 'about',
  component: AboutComponent,

},
{
  path: 'about/dutton',
  component: AboutDuttonComponent
},
{
  path: 'about/iona',
  component: AboutIonaComponent
},
{
  path: 'about/media',
  component: AboutMediaComponent
},
{
  path: 'about/pastor',
  component: AboutPastorComponent
},
{
  path: 'about/events',
  component: AboutEventsComponent
},
{
  path: 'about/links',
  component: AboutLinksComponent
},
{
  path: 'ministry/men',
  component: MinistryMenComponent
},
{
  path: 'ministry/women',
  component: MinistryWomenComponent
},
{
  path: 'ministry/sunday',
  component: MinistrySundayComponent
},
{
  path: 'ministry/youth',
  component: MinistryYouthComponent
},
{
  path: 'contact',
  component: ContactUsComponent
},
{
  path: 'christmas',
  component: XmasComponent
},
{
  path: 'sermons',
  component: SermonListsComponent
},
{
  path: 'videos',
  component: LiveComponent
},
{
  path: '',
  component: HomeComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

