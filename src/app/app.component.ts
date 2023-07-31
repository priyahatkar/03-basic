import { Component } from '@angular/core';
import { Iperson } from './shared/models/_persons';
import { Iteam } from './shared/models/_teams';
import { Iempoly } from './shared/models/_employ';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic';

  persons : Array<Iperson> = [
    {
      fname : "Jhon",
      lname : "Doe",
      email : "doe@gmail.com",
      profile : "Angular developer",
      contact : 7854789532
    },
    {
      fname : "Jen",
      lname : "wick",
      email : "jen@gmail.com",
      profile : "React developer",
      contact : 9045889532
    },
    {
      fname : "may",
      lname : "Doe",
      email : "may@gmail.com",
      profile : "MEAN developer",
      contact : 9875642588
    },
    {
      fname : "James",
      lname : "Doe",
      email : "James@gmail.com",
      profile : "MERN developer",
      contact : 8687458624
    }
  ];

  teams : Array<Iteam> =[
    {
      fname :"Rohit",
      lname : "Sharma",
      DateOfBirth : "30 April 1987",
      idNo : 45,
      nativePlace : "Nagpur",
      role : "Batsman",
    },
    {
      fname :"Virat",
      lname : "Kohli",
      DateOfBirth : " 5 November 1988",
      idNo : 18,
      nativePlace : "Delhi",
      role : "Batsman",
    },
    {
      fname :"Suresh",
      lname : "Raina",
      DateOfBirth : "27 November 1986",
      idNo : 3,
      nativePlace : "Muradnagar, Ghaziabad",
      role : "Batsman",
    },
    {
      fname :"Mahendra Singh",
      lname : "Dhoni",
      DateOfBirth : "7 July 1981",
      idNo : 7,
      nativePlace : "Ranchi, Bihar ",
      role : "Wicket-keeper-batter",
    },
    {
      fname :"Hardik",
      lname : "Pandya",
      DateOfBirth : "11 October 1993 ",
      idNo : 33,
      nativePlace : "Choryasi, Surat",
      role : "All-rounder",
    },
  ];

  employs : Array<Iempoly>= [
    {
      fname : "Jhon",
      lname : "Doe",
      designation : "manger",
      email : "doe@gmail.com",
      empId : 12348,
      contact : 7854789532
    },
    {
      fname : "Jen",
      lname : "wick",
      designation : "assistant manager",
      email : "jwick@gmail.com",
      empId : 15848,
      contact : 8955459532
    },
    {
      fname : "mack",
      lname : "wick",
      designation : "project manager",
      email : "mack@gmail.com",
      empId : 18848,
      contact : 7456819532
    },
    {
      fname : "John",
      lname : "wick",
      designation : "Team lead",
      email : "john@gmail.com",
      empId : 20848,
      contact : 7514253791
    },
    {
      fname : "sunny",
      lname : "jonsan",
      designation : "software Engineer",
      email : "sunny@gmail.com",
      empId : 270248,
      contact : 8525468123
    }
  ]
}
