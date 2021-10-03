import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginp',
  templateUrl: './loginp.component.html',
  styleUrls: ['./loginp.component.css']
})
export class LoginpComponent implements OnInit {
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()
  })

  constructor(public router:Router, public loginSer:LoginService) { }
  msg: string='';

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    this.loginSer.checkUser().subscribe(result=>{
      let message = result.find(l=>l.user==login.user && l.pass==login.pass);
      if(message == undefined){
        this.msg = "Invalid UserName and Password";
      } else{
        this.router.navigate(["quiz",login.user]);
      }
    },error=>console.log(error));
    this.loginRef.reset();
  }

}
