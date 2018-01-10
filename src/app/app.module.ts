import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';;
import {FormsModule} from '@angular/forms'
import {AlertsService} from './alert-service/alerts.service'



import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import{HttpClientModule} from '@angular/common/http';
import{NgProgressModule} from '@ngx-progressbar/core';
import{NgProgressHttpClientModule} from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import{RouterModule,Routes} from '@angular/router';
import{RoutingModule} from './routing/routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

//defining Route
const routes:Routes=[
{path:"goals",component:GoalComponent},
{path:"about",component:AboutComponent},
{path:"",redirectTo:"/goals",pathMatch:"full"},
{path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent,



  ],
  imports: [
    BrowserModule,
     FormsModule,
     RoutingModule,
     HttpClientModule,
     NgProgressModule.forRoot(),
     NgProgressHttpClientModule,

  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
