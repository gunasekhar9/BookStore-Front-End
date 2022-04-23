import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from 'src/app/Services/HttpService/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  submitted=false;
  user='1';
  public showPassword: boolean = false;

  constructor(private formBuilder:FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      EmailId:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
    login(){
      if(this.loginForm.valid){
        let reqData = 
        {
          EmailId:this.loginForm.value.EmailId,
          Password:this.loginForm.value.Password
        }
  
        console.log(this.loginForm.value);
        this.userService.login(reqData).subscribe((Response:any)=>{
          console.log("login Successfull", Response);
          localStorage.setItem("token", Response.id)
          this.router.navigate(['/dashboard']);
        },error =>{
          console.log(error);
        })      
      }
      else{
        console.log("Form is not valid. Fill the form correctly");
        return;
      }
    }
  
    public togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
    }
}

