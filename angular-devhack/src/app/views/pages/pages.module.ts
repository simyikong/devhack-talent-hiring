import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule,
         CardModule,
         FormModule,
         GridModule,
        ButtonGroupModule,
        ListGroupModule
      } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { TestPg1Component } from './test-pg1/test-pg1.component';
import { TestPg2Component } from './test-pg2/test-pg2.component';
import { TestPg3Component } from './test-pg3/test-pg3.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    TestPg1Component,
    TestPg2Component,
    TestPg3Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ListGroupModule,
    ButtonGroupModule
  ]
})
export class PagesModule {
}
