import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../services/web-api.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    providers: [WebApiService],

})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    constructor(public webService:WebApiService) { }
    profile:any={
        name:'',email:'',mobile:'',password:'',policy:true,
    }
    dialogData: any = {
        "visibility": false,
        "data": "",
        "type": ""
      }
    ngOnInit() {
      this.isActive()
    }
    isActive()
    {
      let requestObj:any={};
      this.webService.commonPostMethod('users', requestObj).
      subscribe(
        data => {
          if (data.status) {
          } else {
          }
        },
        error => {
        }
      );
    }
    createProfile()
    {
        if(this.profile.name==''||this.profile.name==undefined)
        {
            this.dialogData.visibility = true;
            this.dialogData.data = "Add Name"
            this.dialogData.type = 'Failure';
            this.webService.makeFocusById('name')
            return false;
        }
        if(this.profile.email==''||this.profile.email==undefined)
        {
            this.dialogData.visibility = true;
            this.dialogData.data = "Add Email"
            this.dialogData.type = 'Failure';
            this.webService.makeFocusById('email')
            return false;
        }
        if(this.profile.mobile==''||this.profile.mobile==undefined)
        {
            this.dialogData.visibility = true;
            this.dialogData.data = "Add Mobile"
            this.dialogData.type = 'Failure';
            this.webService.makeFocusById('mobile')
            return false;
        }
        if(this.profile.password==''||this.profile.password==undefined)
        {
            this.dialogData.visibility = true;
            this.dialogData.data = "Add Password"
            this.dialogData.type = 'Failure';
            this.webService.makeFocusById('password')
            return false;
        }
        if(!this.profile.policy)
        {
            this.dialogData.visibility = true;
            this.dialogData.data = "Agree With Policy"
            this.dialogData.type = 'Failure';
            this.webService.makeFocusById('policy')
            return false;
        }
        let requestObj:any={...this.profile};
        this.webService.commonPostMethod('profile/createNew', requestObj).
        subscribe(
          data => {
            if (data.status) {
              this.dialogData.visibility = true;
              this.dialogData.data = data.message;
              this.dialogData.type = 'Success';
              this.webService.redirectURL("/home")
            } else {
              this.dialogData.visibility = true;
              this.dialogData.data = data.message;
              this.dialogData.type = 'Failure';
            }
          },
          error => {
            this.dialogData.visibility = true;
            this.dialogData.data = "Try After Sometime";
            this.dialogData.type = 'Failure';
          }
        );
    
    }
}
