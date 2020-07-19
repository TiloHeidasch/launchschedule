import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'launch',
    pathMatch: 'full'
  },
  {
    path: 'launch',
    loadChildren: () => import('./launch/launch.module').then(m => m.LaunchModule)
  },
  {
    path: 'rocket',
    loadChildren: () => import('./rocket/rocket.module').then(m => m.RocketModule)
  },
  {
    path: 'agency',
    loadChildren: () => import('./agency/agency.module').then(m => m.AgencyModule)
  },
  {
    path: 'mission',
    loadChildren: () => import('./mission/mission.module').then(m => m.MissionModule)
  },
  {
    path: 'pad',
    loadChildren: () => import('./pad/pad.module').then(m => m.PadModule)
  },
  {
    path: 'payload',
    loadChildren: () => import('./payload/payload.module').then(m => m.PayloadModule)
  },
  {
    path: 'statistic',
    loadChildren: () => import('./statistic/statistic.module').then( m => m.StatisticPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
