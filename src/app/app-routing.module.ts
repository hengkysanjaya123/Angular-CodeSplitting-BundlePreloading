import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContentComponent } from "./content/content.component";
import { QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: 'content', component: ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
