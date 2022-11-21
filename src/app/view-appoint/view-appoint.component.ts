import { Component, OnInit } from '@angular/core';
import { PlaceAppointComponent } from '../place-appoint/place-appoint.component';
import { DataserviceService } from '../service/dataservice.service';
import { l } from '../types/type';
@Component({
  selector: 'app-view-appoint',
  templateUrl: './view-appoint.component.html',
  styleUrls: ['./view-appoint.component.css']
})
export class ViewAppointComponent implements OnInit {
  list1: l[]=[];
  value:boolean=true
  
  constructor(private data1:DataserviceService) {

  }

  ngOnInit(): void {
    this.list1=this.data1.list
    if(this.list1.length==0){
      this.value=false
    }
    console.log(this.data1.list)
    
    
  }

}
