import { Component, OnInit } from '@angular/core';
import { isThisTypeNode } from 'typescript';
import { l } from '../types/type';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-place-appoint',
  templateUrl: './place-appoint.component.html',
  styleUrls: ['./place-appoint.component.css']
})
export class PlaceAppointComponent implements OnInit {
  form:l={
    name:"",
    email:"",
    age:"",
    phno:"",
    address:"",
    pincode:"",
    trainer:"",
    physio:"",
    radio:"",
    amount:0,
    weeks:2,

  }
  public pack:number=0
  public phy:number=0

  getamount(){
    if(this.form.radio==="one session"){
      this.pack=500
      this.form.weeks=1
    }
    else if(this.form.radio==="four sessions"){
      this.pack=400
    }
    else if(this.form.radio==="five sessions"){
      this.pack=300
    }
    if(this.form.physio=="yes"){
      this.phy=200
    }
    this.form.amount=(this.pack*this.form.weeks)+this.phy
  }
  submit(){
    this.getamount()
    this.data.add(this.form)
    alert("Successfully Booked!")
  }

  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
  }

}
