import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  div{
     margin: 0 auto;
     text-align: center;
     width:200px;
  }
  .rotate{
     width:100px;
     height:100px;
     border:solid 1px red;
  }
`],
  animations: [
    trigger('myanimation', [
      state('smaller', style({
        transform: 'translateY(100px)'
      })),
      state('larger', style({
        transform: 'translateY(0px)'
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'app';

  todaydate;

  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  isavailable = false;

  constructor(private myservice: MyserviceService) { }


  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    //prompt("learning what happen with prompt!!");
    console.log(event);
    this.isavailable = !this.isavailable;
  }

  changemonths(event) {
    alert("Changed month from the Dropdown");
    console.log("Changed month from the Dropdown");
    console.log(event);
  }

  // onClickSubmit(data) {
  //   alert("Entered Email id : " + data.emailid);
  // }

  state: string = "smaller";
  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }

  myData: Array<any>;

  emailid;
  formdata;

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { "passwd": true };
    }
  }

  onClickSubmit(data) {
    this.emailid = data.emailid;
  }






}
