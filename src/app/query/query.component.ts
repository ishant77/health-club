import { Component, OnInit } from '@angular/core';
import { q } from '../types/type';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  list:q[]=[]
  form:q={
    name:"",
    email:"",
    phno:"",
    message:"",
  }
  submit(){
    this.list.push(this.form)
    console.log(this.list)
    alert("Succesfully submitted query!")
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
