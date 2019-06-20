import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: '../news/news.module#NewsPageModule'
          }
        ]
      },

      {
        path: 'donation',
        children: [
          {
            path: '',
            loadChildren: '../donation/donation.module#DonationPageModule'
          }
        ]
      },
      {
        path: 'videos',
        children: [
          {
            path: '',
            loadChildren: '../videos/videos.module#VideosPageModule'
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: '../contact/contact.module#ContactPageModule'
          }
        ]
      },
      {
        path: 'news1',
        children: [
          {
            path: '',
            loadChildren: '../news1/news1.module#News1PageModule'
          }
        ]
      },
      {
        path: 'news2',
        children: [
          {
            path: '',
            loadChildren: '../news2/news2.module#News2PageModule'
          }
        ]
      },
      {
        path: 'news3',
        children: [
          {
            path: '',
            loadChildren: '../news3/news3.module#News3PageModule'
          }
        ]
      },
      {
        path: 'news4',
        children: [
          {
            path: '',
            loadChildren: '../news4/news4.module#News4PageModule'
          }
        ]
      },
      {
        path: 'news5',
        children: [
          {
            path: '',
            loadChildren: '../news5/news5.module#News5PageModule'
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
