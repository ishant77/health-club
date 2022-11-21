import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceAppointComponent } from './place-appoint/place-appoint.component';
import { QueryComponent } from './query/query.component';
import { ViewAppointComponent } from './view-appoint/view-appoint.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'place',component:PlaceAppointComponent},
  {path:'view',component:ViewAppointComponent},
  {path:'query',component:QueryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
