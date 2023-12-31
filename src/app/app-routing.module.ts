import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      
      {path: 'home', component: HomePageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
