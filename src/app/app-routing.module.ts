import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'donation', loadChildren: './donation/donation.module#DonationPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'videos', loadChildren: './videos/videos.module#VideosPageModule' },
  { path: 'news1', loadChildren: './news1/news1.module#News1PageModule' },
  { path: 'news2', loadChildren: './news2/news2.module#News2PageModule' },
  { path: 'news3', loadChildren: './news3/news3.module#News3PageModule' },
  { path: 'news4', loadChildren: './news4/news4.module#News4PageModule' },
  { path: 'news5', loadChildren: './news5/news5.module#News5PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
