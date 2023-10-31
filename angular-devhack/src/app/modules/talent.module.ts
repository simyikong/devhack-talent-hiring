import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentDashboardPageComponent } from './talent-module/talent-dashboard-page/talent-dashboard-page.component';
import { AutomatedResumeComponent } from './talent-module/automated-resume/automated-resume.component';
import { UpskillYourselfComponent } from './talent-module/upskill-yourself/upskill-yourself.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { TalentRoutingModule } from './talent-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AutomatedResumeComponent,
    TalentDashboardPageComponent,
    UpskillYourselfComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  exports: [
    AutomatedResumeComponent,
    TalentDashboardPageComponent,
    UpskillYourselfComponent
  ]
})
export class TalentModule { }
