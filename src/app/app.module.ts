import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewAppointComponent } from './view-appoint/view-appoint.component';
import { PlaceAppointComponent } from './place-appoint/place-appoint.component';
import { QueryComponent } from './query/query.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { DataserviceService } from './service/dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewAppointComponent,
    PlaceAppointComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
  ],
  providers: [PlaceAppointComponent,DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
