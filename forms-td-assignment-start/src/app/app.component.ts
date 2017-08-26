import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('f') subscriptionForm:NgForm;
    submitted=false
    subscriptions=["Basic", "Advanced", "Pro"];
    selectedSubscription = "Advanced";
    
    info = {
        email: '',
        subscription: '',
        password: ''
    }
    onSubmit(){
        this.submitted = true;
        this.info.email = this.subscriptionForm.form.value.email;
        this.info.subscription = this.subscriptionForm.form.value.subscription;
        this.info.password = this.subscriptionForm.form.value.password;
    }
}
