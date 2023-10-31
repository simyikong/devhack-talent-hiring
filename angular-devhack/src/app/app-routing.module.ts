import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { JobPostingComponent } from './views/pages/job-posting/job-posting.component';
import { JobListComponent } from './views/pages/job-list/job-list.component';
import { TalentDiscoveryComponent } from './views/pages/talent-discovery/talent-discovery.component';
import { TestPg1Component } from './views/pages/test-pg1/test-pg1.component';
import { TestPg2Component} from './views/pages/test-pg2/test-pg2.component';
import { TestPg3Component} from './views/pages/test-pg3/test-pg3.component';
import { TalentDashboardPageComponent } from './modules/talent-module/talent-dashboard-page/talent-dashboard-page.component';
import { AutomatedResumeComponent } from './modules/talent-module/automated-resume/automated-resume.component';
import { UpskillYourselfComponent } from './modules/talent-module/upskill-yourself/upskill-yourself.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: 'talent/dashboard', component: TalentDashboardPageComponent },
  { path: 'talent/resume', component: AutomatedResumeComponent },
  { path: 'talent/upskill', component: UpskillYourselfComponent },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'job-posting',
    component: JobPostingComponent,
    data: {
      title: 'Create Job Post'
    }
  },
  {
    path: 'job-list',
    component: JobListComponent,
    data: {
      title: 'Jobs Pending'
    }
  },
  {
    path: 'talent-discovery',
    component: TalentDiscoveryComponent,
    data: {
      title: 'Talents Around You'
    }
  },
  {
    path: 'test-pg1',
    component: TestPg1Component,
    data: {
      title: 'Test page 1'
    }
  },
  {
    path: 'test-pg2',
    component: TestPg2Component,
    data: {
      title: 'Test page 2'
    }
  },
  {
    path: 'test-pg3',
    component: TestPg3Component,
    data: {
      title: 'Test page 3'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
