import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    projectForm: FormGroup;
    status = ['Stable', 'Critical', 'Finished'];
    
    ngOnInit(){
        this.projectForm = new FormGroup({
           'name': new FormControl(null, [Validators.required], CustomValidators.forbiddenNames),
           'email': new FormControl(null, [Validators.required, Validators.email]),
           'status': new FormControl('Critical')            
        });        
    }
    
    onSubmit(){
        console.log(this.projectForm.value);
    }
}
