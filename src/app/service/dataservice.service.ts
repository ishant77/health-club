import { Injectable } from '@angular/core';
import { PlaceAppointComponent } from '../place-appoint/place-appoint.component';
import { l } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  list:l[]=[]


  constructor() { }
  add(form:l){
    this.list.push(form)
  }

}
