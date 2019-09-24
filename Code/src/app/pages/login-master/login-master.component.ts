import { Component, ViewChild, ChangeDetectorRef, TemplateRef, Directive, HostListener, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { LoginModel } from '../../shared/model/LoginModel';
import { LoginServicesService } from '../../shared/service-proxy/login-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../../shared/SessionHandler/auth-gard.service'
@Component({
  selector: 'app-login-master',
  templateUrl: './login-master.component.html',
  styleUrls: ['./login-master.component.scss']
})

export class LoginMasterComponent {
  @ViewChild('template') template: TemplateRef<any>;
  UserMasterForm: FormGroup;
  dataTable: any;
  Title: string;
  UserName: string;
  Password: string;
  Results: any;
  ErrorMessage: string;
  constructor(private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private Loginserivces: LoginServicesService,
    private el: ElementRef, private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    
    this.LoadForm();
    let a = this.router.url;
    if (a !== "/login") {
      // let url: string = this.router.url.substring(0, this.router.url.indexOf("?"));
      // this.router.navigateByUrl(url);
      this.router.navigateByUrl("/login");
    }


  }
  LoadForm() {
    localStorage.clear();
    sessionStorage.clear();
    this.Title = "Log In";
    this.UserMasterForm = this.fb.group({
      UserName: [''],
      Password: [''],
    });
  }
  GetLogin(data: LoginModel) {

    if (data != null) {
      this.Title = "Ckeking....";
      this.UserName = data.UserName;
      this.Password = data.Password;
      this.Loginserivces.GetLoginProcess(this.UserName, this.Password).subscribe((res): any => {
        this.Results = res;
        if (res.Password != null && res.Password != '') {
          localStorage.setItem("UserName", res.UserName);
          localStorage.setItem("Password", res.Password);
          sessionStorage.setItem("OriginalType", res.UserType);
          localStorage.setItem("Type", res.UserType);
          this.router.navigateByUrl('home');

          event.preventDefault();
        } else {
          this.ErrorMessage = res.UserName;
        }
      });
      this.Title = "Log In";

    }
  }

}
