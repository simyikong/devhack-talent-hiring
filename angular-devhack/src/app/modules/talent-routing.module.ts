import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalentDashboardPageComponent } from './talent-module/talent-dashboard-page/talent-dashboard-page.component';
import { AutomatedResumeComponent } from './talent-module/automated-resume/automated-resume.component';
import { UpskillYourselfComponent } from './talent-module/upskill-yourself/upskill-yourself.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: TalentDashboardPageComponent
  },
  {
    path: 'resume',
    component: AutomatedResumeComponent
  },
  {
    path: 'upskill',
    component: UpskillYourselfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentRoutingModule { }
