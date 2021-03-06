import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService, AuthResponseData} from "./auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/plaseholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit , OnDestroy{
  isLoginMode = true;
  isLoging = false;
  error?: string | null;
  @ViewChild(PlaceholderDirective) alertHost?: PlaceholderDirective;

  private closeSub!: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs : Observable<AuthResponseData>;
    this.isLoging = true;


    if(this.isLoginMode){
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe( restData =>{
      console.log(restData);
      this.isLoging = false;
      this.router.navigate(['/recipes']);

    }, errorMessage =>{
      this.isLoging = false;
      this.error = errorMessage;
      this.showErrorAlert(errorMessage);
      console.log(errorMessage);
    });

    form.reset();
  }
  ngOnDestroy() {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }


  onHandleError(){
    this.error = null;
  }
  private showErrorAlert(message: string){
    // const alertCmp = new AlertComponent();
   const alertCmpFactory =  this.componentFactoryResolver
     .resolveComponentFactory(
       AlertComponent);
    const hostViewContainerRef = this.alertHost?.viewContainerRef;
    hostViewContainerRef?.clear();
    const componentRef = hostViewContainerRef?.createComponent(alertCmpFactory);

    componentRef!.instance.message = message;
    this.closeSub = componentRef!.instance.close.subscribe(()=>
    {
      this.closeSub.unsubscribe();
      hostViewContainerRef?.clear();
    });
  }


}
